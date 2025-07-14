package com.example.ormlearn;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private CountryRepository countryRepository;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Countries containing 'ou':");
        countryRepository.findByNameContainingIgnoreCase("ou").forEach(System.out::println);

        System.out.println("\nCountries containing 'ou' (sorted):");
        countryRepository.findByNameContainingIgnoreCaseOrderByNameAsc("ou").forEach(System.out::println);

        System.out.println("\nCountries starting with 'Z':");
        countryRepository.findByNameStartingWithIgnoreCase("Z").forEach(System.out::println);
    }
} 