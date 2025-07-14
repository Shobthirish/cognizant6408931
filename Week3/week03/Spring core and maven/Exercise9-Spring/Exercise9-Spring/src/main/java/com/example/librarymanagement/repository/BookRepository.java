package com.example.librarymanagement.repository;

import com.example.librarymanagement.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
} 