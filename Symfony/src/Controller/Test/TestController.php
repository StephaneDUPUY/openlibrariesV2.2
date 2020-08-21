<?php

namespace App\Controller\Test;

use App\Entity\Address;
use App\Entity\Book;
use App\Entity\Booking;
use App\Entity\Library;
use App\Entity\User;

use Doctrine\ORM\EntityManagerInterface;

use App\Repository\AddressRepository;
use App\Repository\BookRepository;
use App\Repository\LibraryRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;




/**
 * @Route("/test", name="test_")
 */
class TestController extends AbstractController
{
    /**
     * @Route("/book/add/", name="bookadd")
     */
    public function addBookTest(EntityManagerInterface $em)
    {
        // Route to test well behaviour betwen User - Booking - Book

        $bookToAdd = new Book;
        $bookToAdd->setTitle("Le manuel de test de sa route pour les Nuls");
        $bookToAdd->setType("Développement web");
        $bookToAdd->setDescription("Un livre bien chiant à lire mais qui fera de vous un Super Developpeur prêt à être embauché chez Google");
        $bookToAdd->setIsbn("9876000004561");
        $bookToAdd->setAuthor("Dario");
        $bookToAdd->setCreatedAt((new \DateTime()));

        $em->persist($bookToAdd);
        $em->flush();
    }

    /**
     * @Route("/address/add/", name="addressadd")
     */
    public function addAddressTest(EntityManagerInterface $em)
    {
        $newAddress = new Address;
        $newAddress->setStreet("65 avenue du Trocadero");
        $newAddress->setPostalCode(75000);
        $newAddress->setCity("Paris");
        $newAddress->setLongitude(45,652565);
        $newAddress->setLatitude(45,652565);
        $newAddress->setCreatedAt(new \DateTime());

        $em->persist($newAddress);
        $em->flush();
    }

    /**
     * @Route("/library/add/", name="libraryadd")
     */
    public function addLibraryTest(EntityManagerInterface $em, AddressRepository $address)
    {
        $findAdress = $address->findById(1);

        $newLibrary = new Library;
        $newLibrary->setName("Oclock");
        $newLibrary->setAddress($findAdress[0]);
        $newLibrary->setCreatedAt(new \DateTime());

        $em->persist($newLibrary);
        $em->flush();
    }

    /**
     * @Route("/user/add/", name="useradd")
     */
    public function addUserTest(EntityManagerInterface $em, AddressRepository $address ,LibraryRepository $library, UserPasswordEncoderInterface $encoder)
    {

        $findLibrary = $library->findById(1);
        $findAdress = $address->findById(51);

        $newUser = new User;
        $newUser->setLibrary($findLibrary[0]);
        $newUser->setAddress($findAdress[0]);
        $newUser->setFirstname('Nicolas');
        $newUser->setLastname('AimeReact');
        $newUser->setEmail('nicoco@gmail.com');
        $newUser->setRoles(['ROLE_USER']);
        $plainPassword = 'momo';
        $encoded = $encoder->encodePassword($newUser, $plainPassword);
        $newUser->setPassword($encoded);
        $newUser->setPhoneNumber('0120304050');
        $newUser->setCreatedAt(new \DateTime());

        $em->persist($newUser);
        $em->flush();
    }

    /**
     * @Route("/booking/add/", name="bookingadd")
     */
    public function addBookingTest(EntityManagerInterface $em ,LibraryRepository $library, UserRepository $user, BookRepository $book)
    {
        $findLibrary = $library->findById(1);
        $findBook = $book->findById(2);
        $findUser = $user->findById(1);

        $newBooking = new Booking;
        $newBooking->setUserOwner($findUser[0]);
        $newBooking->setBook($findBook[0]);
        $newBooking->setCreatedAt(new \DateTime());

        $em->persist($newBooking);
        $em->flush();
    }

}