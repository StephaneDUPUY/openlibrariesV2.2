<?php

namespace App\Controller\Api;

use App\Entity\Book;
use App\Entity\Booking;
use App\Repository\BookingRepository;
use App\Repository\BookRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 *
 * @Route("/api/book", name="api_book_")
 */
class ApiBookController extends AbstractController
{
    /**
     * List All the books
     * @Route("/all", name="all", methods={"GET"})
     */
    public function listAll(BookRepository $bookRepository)
    {
        $data = $bookRepository->findAll();
        return $this->json($data, 200, [], ['groups' => '1']);
    }

    /**
     * List the last two registered books
     * @Route("/latest", name="latest", methods={"GET"})
     */
    public function latestBooks(BookRepository $bookRepository)
    {
        $data = $bookRepository->twoNewBooks();
        return $this->json($data, 200, [], ['groups' => '1']);
    }

    /**
     * List all types
     * @Route("/list/type", name="list_type", methods={"GET"})
     */
    public function listType(BookRepository $bookRepository)
    {
        $arrayOfTypes = $bookRepository->listOfTypes();

        return $this->json($arrayOfTypes, 200, [], ['groups' => '1']);
    }

    /**
     * List of all books sorted by type
     * @Route("/list/{type}", name="list", methods={"GET"})
     */
    public function listBooksWithType(BookRepository $bookRepository, $type)
    {
        //Find books by their type
        $bookSearch = $bookRepository->findBy(
            ['type' => $type]
        );
        return $this->json($bookSearch, 200, [], ['groups' => '1']);

    }

    /**
     * Show one book by ISBN number
     * @Route("/{isbn}/show", name="book_show", methods={"GET"})
     */
    public function showBookIsbnJson(BookRepository $bookRepository, $isbn)
    {

        //Serialization + Json format
        return $this->json($bookRepository->findByIsbn($isbn), 200, [], ['groups' => '1']);
    }

    /**
     * Search one book by ISBN number on Google Book API or BDD if set inside
     * @Route("/{isbn}", name="book_google", methods={"GET"})
     */
    public function bookApiExt(BookRepository $bookRepository, $isbn, SerializerInterface $serializer)
    {
        // Intercept the $isbn to check if the book already exists in the database
        $checkBook = $bookRepository->findByIsbn($isbn);

        // Check if book exist in database
        if (!empty($checkBook)){
            return $this->json($checkBook, 200, [], ['groups' => '1']);
        } else {
            // Request to Google Book API
            $request = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' . $isbn;
            //Extract request content
            $response = file_get_contents($request);
            $results = json_decode($response);
                //Check if is there any result on 0 place from item array
                if (isset($results->items[0])){
                    $bookResult = $results->items[0];
                    $bookInfos = $bookResult->volumeInfo;
                    $data = (array) $bookInfos;
                    //Check if there any cover
                    if(isset($bookResult->volumeInfo->imageLinks)){
                        $bookCover = ['image' => $bookResult->volumeInfo->imageLinks->thumbnail];
                        array_push($data, $bookCover);
                    }
                    return $this->json($data, 200, [], ['groups' => '1']);
                } else {
                    $message = "Le livre n'a pas été trouvé, merci de remplir le formulaire pour ajouter votre livre";
                    return $this->json($message, 200, []);
                }
        }
    }

    /**
     * Add one book by ISBN number with Google Book API or BDD if set inside
     * @Route("/{isbn}/add", name="book_goole_add", methods={"GET"})
     */
    public function addBookApiExt(BookRepository $bookRepository, EntityManagerInterface $em, $isbn)
    {
        // we are aware that this function can be optimize - explanation to add => DRY

        // Find the connected user
        $user = $this->getUser();
        $userRole = $user->getRoles();
        $userLibrary = $user->getLibrary();
        // Intercept the $isbn to check if the book already exists in the database
        $checkBook = $bookRepository->findByIsbn($isbn);

        if (!empty($checkBook)){
            $bookExist = $checkBook[0];
            $addNewOwner = new Booking;
            $addNewOwner->setBook($bookExist);
            // need to add a if for a connected user with ROLE_ADMIN cause it will set up the LibraryOwner
            if ($userRole == ['ROLE_USER']){
                $addNewOwner->setUserOwner($user);
            }
            if ($userRole == ['ROLE_ADMIN']){
                $addNewOwner->setLibraryOwner($userLibrary);
            }

            $addNewOwner->setCreatedAt(new \DateTime());
            $addNewOwner->setDateOfDisposal(new \DateTime());

            $em->persist($addNewOwner);
            $em->flush();

            return $this->json([$checkBook[0]], 200, [], ['groups' => '1']);

        } else {
            // Request to Google Book API
            $request = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' . $isbn;
            //Extract request content
            $response = file_get_contents($request);
            // json to array format
            $results = json_decode($response);

            if (isset($results->items[0])){
                $bookResult = $results->items[0];
                // Creation a new book
                $newBook = new Book;
                // Retrieve informations from Google Book API
                $newBook->setTitle($bookResult->volumeInfo->title);
                if (isset($bookResult->volumeInfo->categories[0])){
                    $newBook->setType($bookResult->volumeInfo->categories[0]);
                } else {
                    $newBook->setType('Autre');
                }
                if (isset($bookResult->volumeInfo->description)){
                    $newBook->setDescription($bookResult->volumeInfo->description);
                } else {
                    $newBook->setDescription('Pas de description disponible à ce jour');
                }
                $newBook->setIsbn($isbn);
                if (isset($bookResult->volumeInfo->authors[0])) {
                    $newBook->setAuthor($bookResult->volumeInfo->authors[0]);
                } else {
                    $newBook->setAuthor('Pas d\'auteur renseigné à ce jour');
                }
                // Date format is the API Google Book Response can have different format (ex : just the year like "2000" or year|month|day like "2017-09-07" or year|month like "2010-03") => in the last 2 cases, the php function explode() can do the job, but can generate an error for the first case scenario ... after reading the documentation https://www.php.net/manual/fr/function.explode.php, it seems that it will be good even for the first scenario. So let's implement it
                if (isset($bookResult->volumeInfo->publishedDate)){
                    $datePublication = $bookResult->volumeInfo->publishedDate;
                    $dateFormated = explode('-', $datePublication);
                    $newBook->setPublicationDate($dateFormated[0]);
                } else {
                    $newBook->setPublicationDate('Aucune');
                }
                if(isset($bookResult->volumeInfo->imageLinks)){
                    $newBook->setCover(str_replace('&edge=curl', '', $bookResult->volumeInfo->imageLinks->thumbnail));
                }
                $newBook->setCreatedAt(new \DateTime());
                $em->persist($newBook);
                $em->flush();

                 // As my new book is registered in the Database, we can find it in the BookRepository
                $findBook = $bookRepository->findByIsbn($isbn);

                // And add the ownership relation
                $addNewOwner = new Booking;
                $addNewOwner->setBook($findBook[0]);
                // need to add a if for a connected user with ROLE_ADMIN cause it will set up the LibraryOwner
                if ($userRole == ['ROLE_USER']){
                    $addNewOwner->setUserOwner($user);
                }
                if ($userRole == ['ROLE_ADMIN']){
                    $addNewOwner->setLibraryOwner($userLibrary);
                }
                $addNewOwner->setCreatedAt(new \DateTime());
                $addNewOwner->setDateOfDisposal(new \DateTime());

                $em->persist($addNewOwner);
                $em->flush();

                return $this->json([$findBook[0]],200, [], ['groups' => '1']);

            } else {
                $message = "Le livre n'a pas été trouvé, merci de remplir le formulaire pour ajouter votre livre";
                return $this->json($message, 200, []);
            }
        }
    }


    /**
     * Add a book
     * @Route("/add", name="book_add", methods={"POST"})
     */
    public function addBookJson(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $validator)
    {
        $jsonReceived = $request->getContent();

        try {
            //deserialize json data received
            $bookAdd = $serializer->deserialize($jsonReceived, Book::class, 'json');

            // store potential errors
            $errors = $validator->validate($bookAdd);

            //in case of error
            if(count($errors) > 0){
                //send json error message
                return $this->json($errors, 400);
            }

            //registering new book
            $em->persist($bookAdd);
            $em->flush();

            return $this->json($bookAdd, 201, [], ['groups' => '1']);
        }

        //exception message in case of error
        catch (NotEncodableValueException $e) {
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }
    }

    // route missed : remove a book
}