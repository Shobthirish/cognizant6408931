package com.example.ormlearn;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {
    List<Country> findByNameContainingIgnoreCase(String text);
    List<Country> findByNameContainingIgnoreCaseOrderByNameAsc(String text);
    List<Country> findByNameStartingWithIgnoreCase(String prefix);
} 