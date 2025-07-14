package com.library.service;

import org.springframework.stereotype.Service;

@Service
public class BookService {
    public void addBook(String title) {
        System.out.println("Adding book: " + title);
    }
} 