<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AddressRepository")
 */
class Address
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("api_address_infos")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_address_infos")
     */
    private $street;

    /**
     * @ORM\Column(type="integer")
     * @Groups("api_address_infos")
     */
    private $postalCode;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_address_infos")
     */
    private $city;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=6)
     * @Groups("api_address_infos")
     */
    private $longitude;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=6)
     * @Groups("api_address_infos")
     */
    private $latitude;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getPostalCode(): ?int
    {
        return $this->postalCode;
    }

    public function setPostalCode(int $postalCode): self
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(string $latitude): self
    {
        $this->latitude = $latitude;

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

    // allow to display full address in Admin dashboard
    public function getAddress()
    {
        return $this->getStreet().' '.$this->getPostalCode().' '.$this->getCity();
    }

    // avoid error on string format
    public function __toString()
    {
        return $this->getAddress();
    }
}