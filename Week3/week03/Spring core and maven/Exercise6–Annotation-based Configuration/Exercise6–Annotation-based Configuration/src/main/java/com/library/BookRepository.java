package com.library;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {
    public String getBookTitle() {
        return "Spring in Action";
    }
} 