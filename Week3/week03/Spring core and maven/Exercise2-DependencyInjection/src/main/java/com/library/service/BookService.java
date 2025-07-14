package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showServiceInfo() {
        System.out.println("BookService activated.");
        bookRepository.showRepositoryInfo();
    }
}
