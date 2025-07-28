package com.example.library;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void printBookTitle() {
        if (bookRepository != null) {
            System.out.println("Book title: " + bookRepository.getBookTitle());
        } else {
            System.out.println("BookRepository is not set.");
        }
    }
} 