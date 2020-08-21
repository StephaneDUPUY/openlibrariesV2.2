<?php

namespace App\Repository;

use App\Entity\Book;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Query\Expr\OrderBy;

/**
 * @method Book|null find($id, $lockMode = null, $lockVersion = null)
 * @method Book|null findOneBy(array $criteria, array $orderBy = null)
 * @method Book[]    findAll()
 * @method Book[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }

    public function listBooksByTypes($type)
    {   // request on book entity through PHP language
        $qb = $this->createQueryBuilder('b')
        // condition + binding
        ->where('b.type = :type')
        // mapping with real value
        ->setParameter('type', $type)
        // order result by type
        ->orderBy('b.type', 'ASC');
        // retrieve request
        $query = $qb->getQuery();
        // execute and return result
        return $query->execute();
    }

    public function twoNewBooks()
    {
        $qb = $this->createQueryBuilder('b')
        ->setMaxResults(2)
        ->orderBy('b.createdAt', 'DESC');

        $query = $qb->getQuery();

        return $query->execute();
    }

    public function allBooksOrderedByType()
    {
        //Find all books ordered by type
        $qb = $this->createQueryBuilder('b')
        ->select('b.title, b.type, b.isbn, b.author')
        ->orderBy('b.type');

        $query = $qb->getQuery();

        return $query->execute();
    }

    public function listOfTypes()
    {
        //Find all types of books without any duplicate ones
        $qb = $this->createQueryBuilder('b')
        ->select('b.type')
        // avoid duplicate result
        ->distinct('b.type');

        $query = $qb->getQuery();

        return $query->execute();
    }

}
