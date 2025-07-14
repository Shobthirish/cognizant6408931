package com.cognizant.spring_learn.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.cognizant.spring_learn.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@RestController
public class CountryController {

    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public Country getCountryIndia() {
        // Load the XML configuration and fetch the bean every time the endpoint is hit
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country in = context.getBean("in", Country.class);
        return in;
    }
}
