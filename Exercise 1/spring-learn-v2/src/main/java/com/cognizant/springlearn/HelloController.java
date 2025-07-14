package com.cognizant.springlearn;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Welcome to Spring Boot!";
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, Spring Boot is working!";
    }
}
