<?php

namespace App\Controller\Api;

use App\Entity\Book;
use App\Entity\Booking;
use App\Entity\Library;
use App\Entity\User;
use App\Repository\BookRepository;
use App\Repository\BookingRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

use Doctrine\ORM\EntityManagerInterface;


/**
 * @Route("/api/user", name="api_admin_user_")
 */
class ApiUserController extends AbstractController
{

    /**
     * @Route("/profile", name="profile")
     */
    public function showUserProfile(SerializerInterface $serializer)
    {
        // 0 - Find the connected User
        $user = $this->getUser();

        return $this->json($user, 200, [], ['groups' => ['api_users_infos','api_address_infos']]);
    }

    /**
     * @Route("/profile/update", name="profile_update")
     */
    public function editUserProfile(Request $request)
    {
        // 0 - Find the connected User
        $findUser = $this->getUser();

        // 1 - Collect the request info
        $findUser->setEmail($request->request->get('email'));
        $findUser->setPassword($request->request->get('password'));
        $findUser->setPhoneNumber($request->request->get('phoneNumber'));

        $response = new Response('Vos informations ont bien été mises à jour');

        return $response;
    }

    /**
     * @Route("/searchbook/author/{author}", name="search_author")
     */
    public function searchBookByAuthor(BookRepository $books, $author)
    {
        $bookSearch = $books->findBy(
            ['author' => $author]
        );
        return $this->json($bookSearch, 200, [], ['groups' => '1']);
    }

    /**
     * @Route("/searchbook/title/{title}", name="search_title")
     */
    public function searchBookByTitle(BookRepository $books, $title, BookingRepository $bookingRepository)
    {

        $bookSearch = $books->findBy(
            ['title' => $title]
        );

        $testBookings = $bookSearch[0]->getBooking();

        $datasUsers =[];
        foreach ($testBookings as $testBooking){
            $users = $testBooking->getUserOwner();
            if ($users == null){
                $users = $testBooking->getLibraryOwner();
            }
            array_push($datasUsers, $users);
            }

        $datas = [
            'bookInfos' => $bookSearch[0],
            'datasUsers' => $datasUsers,
        ];

        return $this->json($datas, 200, [], ['groups' => ['1','api_users_infos','api_address_infos', 'api_library_infos']]);
    }

    /**
     * @Route("/searchbook/type/{type}", name="search_type")
     */
    public function searchBookByType(BookRepository $books, $type)
    {
        // use methode finby() from Book entity
        $bookSearch = $books->findBy(
            // use $type value as filter
            ['type' => $type]
        );
        // return result json formatted
        return $this->json($bookSearch, 200, [], ['groups' => '1']);
    }

    /**
     * Function to borrow a book from a user
     * @Route("/booking/add/{book}/{userOwner}", name="add_booking", methods={"POST"})
     */
    public function borrowBook(Book $book, User $userOwner, BookingRepository $bookingRepo, EntityManagerInterface $em)
    {
        // Get the connected user
        $user = $this->getUser();
        // Get the id of the selected book
        $bookId = $book->getId();
        // Get the id of the owner of the book
        $userOwnerId = $userOwner->getId();
        // Check if this particular book is available to loan :
        // select all the booking entities where : book_id = $bookId and userOwner_id = $userOwnerId and date_of_disposal is NULL
        $bookDisposal = $bookingRepo->isBookAvailable($bookId, $userOwnerId);

        // if the date_of_disposal is NULL => $bookDisposal is an array with datas in it => it means that the book is already loaned by an other user
        // so on the contrary if $bookDisposal is an empty array it means that the date_of_disposal is NOT NULL which means that the book is available to be loaned. 
        if (!empty($bookDisposal)){
            $message = "Livre non disponible à l'emprunt";
            return $this->json($message);
        } else {
            $newBooking = new Booking;
            $newBooking->setBook($book);
            $newBooking->setUserOwner($userOwner);
            $newBooking->setUserBorrower($user);
            $newBooking->setDateStart(new \DateTime());
            $newBooking->setCreatedAt(new \DateTime());
            $dateEnd = new \DateTime();
            $dateEnd = $dateEnd->modify('+4 week');
            $newBooking->setDateEnd($dateEnd);

            $em->persist($newBooking);
            $em->flush();

            $message = "Le livre " .$book->getTitle() ." a bien été ajouté à vos emprunts";
            return $this->json($message);
        }
    }

    /**
     * Function to borrow a book from a library
     * @Route("/booking/add/library/{book}/{libraryOwner}", name="add_booking_library")
     */
    public function borrowBookFromLibrary(Book $book, Library $libraryOwner, BookingRepository $bookingRepo, EntityManagerInterface $em)
    {
        // Get the connected user
        $user = $this->getUser();
        $bookId = $book->getId();
        $libraryOwnerId = $libraryOwner->getId();

        $bookDisposal = $bookingRepo->isBookAvailableInLibrary($bookId, $libraryOwnerId);

        if (!empty($bookDisposal)){
            $message = "Livre non disponible à l'emprunt";
            return $this->json($message);
        } else {
            $newBooking = new Booking;
            $newBooking->setBook($book);
            $newBooking->setLibraryOwner($libraryOwner);
            $newBooking->setUserBorrower($user);
            $newBooking->setDateStart(new \DateTime());
            $newBooking->setCreatedAt(new \DateTime());
            $dateEnd = new \DateTime();
            $dateEnd = $dateEnd->modify('+4 week');
            $newBooking->setDateEnd($dateEnd);

            $em->persist($newBooking);
            $em->flush();

            $message = "Le livre " .$book->getTitle() ."a bien été ajouté à vos emprunts";
            return $this->json($message);
        }
    }

    /**
     * Display books the connected user have borrowed
     * @Route("/booking/borrowed", name="borrowed")
     */
    public function listBorrow(BookingRepository $bookingRepo)
    {
        $user = $this->getUser();
        $id = $user->getId();

        $userbookings = $bookingRepo->findBy(
            ['userBorrower' => $id,]
            );

        $userBooks = [];

        foreach ($userbookings as $userbooking){
            $userbook = $userbooking->getBook();
            array_push($userBooks, $userbook);
        }
        return $this->json($userBooks, 200, [], ['groups' => '1']);
    }
}