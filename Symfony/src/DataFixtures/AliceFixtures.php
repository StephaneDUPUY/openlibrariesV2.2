<?php

namespace App\DataFixtures;

use Faker\Factory;
use Nelmio\Alice\Loader\NativeLoader;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AliceFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // set the language
        $faker = Factory::create('fr_FR');
        // push $faker in Alice bundle loader
        $loader = new NativeLoader($faker);
        // set the path to fixtures.yaml
        // create object array from fixtures file
        $entities = $loader->loadFile(__DIR__.'/fixtures.yaml')->getObjects();
        // loop on this array and on each one persist it
        foreach($entities as $entity) {
            $manager->persist($entity);
        }
        // data persisted are then flushed
        $manager->flush();
    }
}
