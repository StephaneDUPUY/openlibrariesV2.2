<?php

namespace App\DataFixtures;

use Faker;
use App\entity\Address;
use App\entity\Book;
use App\entity\Library;
use App\entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;
use Faker\ORM\Doctrine\Populator;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class FakerFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        // ask generator in french
        $generator = Factory::create('fr_FR');

        // pass Doctrine manager to Faker
        $populator = new Faker\ORM\Doctrine\Populator($generator, $manager);

        $manager->flush();

        //Roles
        $roles = [
            'superadmin' => 'SuperAdministrateur',
            'admin' => 'Administrateur',
            'user' => 'Utilisateur',
            ];
    }
}
