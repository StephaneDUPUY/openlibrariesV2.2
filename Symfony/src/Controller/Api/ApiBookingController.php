<?php

namespace App\Controller\Api;

use App\Entity\Book;
use App\Repository\BookingRepository;
use App\Repository\BookRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/api/booking", name="api_booking_")
 */
class ApiBookingController extends AbstractController
{
    /**
     * Page to load the book list depending on their ownership
     * @Route("/list", name="own")
     */
    public function list(BookingRepository $ownbooking, SerializerInterface $serializer)
    {
        $user = $this->getUser();
        $userRole = $user->getRoles();

        if ($userRole == ['ROLE_USER']){
            $id = $user->getId();
            $userbookings = $ownbooking->findBy(
            ['userOwner' => $id,]
            );
        }
        if ($userRole ==['ROLE_ADMIN']){
            $id = $user->getLibrary();
            $userbookings = $ownbooking->findBy(
            ['libraryOwner' => $id,]
            );
        }

        $datas =[];
        $i = 0;

        for ($i ; $i < count($userbookings) ; $i++){
            $data = $ownbooking->joinBookingandBook($userbookings[$i]);
            array_push($datas, $data);
        }

        return $this->json($datas, 200, [], ['groups' => '1']);
    }

    /**
     * Route to end a booking so the book is available to 
     * @Route("/end/{id}", name="end")
     */
    public function endLoan(BookingRepository $bookingRepository, $id, EntityManagerInterface $em)
    {
        $deleteBooking = $bookingRepository->findById($id);
        $updateBooking = $deleteBooking[0]->setDateofDisposal(new \DateTime());

        $em->persist($updateBooking);
        $em->flush();

        return $this->json($updateBooking, 200, [], ['groups' => 'api_booking']);
    }
}