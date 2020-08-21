<?php

namespace App\Repository;

use App\Entity\Booking;
use App\Entity\Book;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\Expr\Join;

/**
 * @method Booking|null find($id, $lockMode = null, $lockVersion = null)
 * @method Booking|null findOneBy(array $criteria, array $orderBy = null)
 * @method Booking[]    findAll()
 * @method Booking[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Booking::class);
    }

    // Check if this particular book is available to loan :
    // Select all the booking entities where book_id = $bookId and userOwner_id = $userOwnerId and date_of_disposal is not NULL
    // If all conditions are fulfilled, return the value
    // If request is empty then book is available
    // If not then book unavailable

    public function isBookAvailable($bookId, $userOwnerId)
    {
        $qb = $this->createQueryBuilder('b')
        // select table
        ->select('b')
        // condition 1 with binding
        ->where('b.book = :book_id')
        // condition 2 with binding
        ->andWhere('b.userOwner = :user_owner_id')
        // condition 3 without binding
        ->andWhere('b.dateOfDisposal IS NULL')
        // mapping with real values of binding
        ->setParameter('book_id', $bookId)
        ->setParameter('user_owner_id', $userOwnerId)
        // filtering output
        ->setMaxResults(1);

        $query = $qb->getQuery();

        return $query->execute();
    }

    public function findTheOwnership($bookId, $userOwnerId)
    {
        $qb = $this->createQueryBuilder('b')
        // select table
        ->select('b')
        // condition 1 + binding
        ->where('b.book = :book_id')
        // condition 2 + binding
        ->andWhere('b.userOwner = :user_owner_id')
        // condition 3 without binding
        ->andWhere('b.dateOfDisposal IS NOT NULL')
        // condition 4 without binding
        ->andWhere('b.userBorrower  IS NULL')
        // mapping with real values
        ->setParameter('book_id', $bookId)
        ->setParameter('user_owner_id', $userOwnerId)
        // filtering output
        ->setMaxResults(1);

        $query = $qb->getQuery();

        return $query->execute();
    }

    public function findTheOwnershipLibrary($bookId, $libraryOwnerId)
    {
        $qb = $this->createQueryBuilder('b')
        ->select('b')
        ->where('b.book = :book_id')
        ->andWhere('b.libraryOwner = :library_owner_id')
        ->andWhere('b.dateOfDisposal IS NOT NULL')
        ->andWhere('b.userBorrower  IS NULL')
        ->setParameter('book_id', $bookId)
        ->setParameter('library_owner_id', $libraryOwnerId)
        ->setMaxResults(1);

        $query = $qb->getQuery();

        return $query->execute();
    }

    public function isBookAvailableInLibrary($bookId, $libraryOwnerId)
    {
        $qb = $this->createQueryBuilder('b')
        ->select('b')
        ->where('b.book = :book_id')
        ->andWhere('b.libraryOwner = :library_owner_id')
        ->andWhere('b.dateOfDisposal IS NULL')
        ->setParameter('book_id', $bookId)
        ->setParameter('library_owner_id', $libraryOwnerId);

        $query = $qb->getQuery();

        return $query->execute();
    }

    public function joinBookingandBook($bookingId)
    {
        $qb = $this->createQueryBuilder('b')
        ->select('b.id', 'b.dateStart', 'b.dateEnd','b.dateOfDisposal','b.createdAt','book.title', 'book.id AS bookId' , 'book.description', 'book.author' , 'book.type', 'book.publicationDate', 'book.cover' )
        //->from('booking', 'b')
        ->innerJoin('b.book', 'book', 'b.book_id = book.id')
        ->where('b.id = :id')
        ->setParameter('id', $bookingId);

        $query = $qb->getQuery();

        return $query->execute();
    }

}
