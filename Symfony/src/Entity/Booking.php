<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BookingRepository")
 */
class Booking
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("api_booking")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("api_booking")
     */
    private $dateStart;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("api_booking")
     */
    private $dateEnd;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("api_booking")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("api_booking")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Book", inversedBy="booking")
     * @Groups("api_booking")
     */
    private $book;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="books")
     * @Groups("api_booking")
     */
    private $userOwner;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Library", inversedBy="books")
     * @Groups("api_booking")
     */
    private $libraryOwner;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="bookings")
     * @Groups("api_booking")
     */
    private $userBorrower;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("api_booking")
     */
    private $dateOfDisposal;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateStart(): ?\DateTimeInterface
    {
        return $this->dateStart;
    }

    public function setDateStart(?\DateTimeInterface $dateStart): self
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    public function getDateEnd(): ?\DateTimeInterface
    {
        return $this->dateEnd;
    }

    public function setDateEnd(?\DateTimeInterface $dateEnd): self
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getBook(): ?Book
    {
        return $this->book;
    }

    public function setBook(?Book $book): self
    {
        $this->book = $book;

        return $this;
    }

    public function getUserOwner(): ?User
    {
        return $this->userOwner;
    }

    public function setUserOwner(?User $userOwner): self
    {
        $this->userOwner = $userOwner;

        return $this;
    }

    public function getLibraryOwner(): ?Library
    {
        return $this->libraryOwner;
    }

    public function setLibraryOwner(?Library $libraryOwner): self
    {
        $this->libraryOwner = $libraryOwner;

        return $this;
    }

    public function getUserBorrower(): ?User
    {
        return $this->userBorrower;
    }

    public function setUserBorrower(?User $userBorrower): self
    {
        $this->userBorrower = $userBorrower;

        return $this;
    }

    public function getDateOfDisposal(): ?\DateTimeInterface
    {
        return $this->dateOfDisposal;
    }

    public function setDateOfDisposal(?\DateTimeInterface $dateOfDisposal): self
    {
        $this->dateOfDisposal = $dateOfDisposal;

        return $this;
    }

    // to avoid string attempt error with easyadmin
    public function __toString() {

        return 'NULL';
     }
}
