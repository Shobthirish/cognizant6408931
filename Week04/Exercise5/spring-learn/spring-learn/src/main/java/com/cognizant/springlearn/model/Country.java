
package com.cognizant.springlearn.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

public class Country {
    @JacksonXmlProperty(localName = "code")
    private String code;

    @JacksonXmlProperty(localName = "name")
    private String name;

    public Country() {}

    public Country(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
