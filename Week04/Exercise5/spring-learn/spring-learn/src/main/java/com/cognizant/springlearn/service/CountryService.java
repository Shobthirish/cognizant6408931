
package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.List;

@Service
public class CountryService {

    public Country getCountry(String code) {
        try {
            InputStream inputStream = getClass().getResourceAsStream("/country.xml");
            XmlMapper xmlMapper = new XmlMapper();
            CountryList countryList = xmlMapper.readValue(inputStream, CountryList.class);

            return countryList.getCountries().stream()
                    .filter(c -> c.getCode().equalsIgnoreCase(code))
                    .findFirst()
                    .orElseThrow(() -> new RuntimeException("Country not found"));
        } catch (Exception e) {
            throw new RuntimeException("Error reading country.xml", e);
        }
    }

    public static class CountryList {
        @com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper(useWrapping = false)
        @com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty(localName = "country")
        private List<Country> countries;

        public List<Country> getCountries() {
            return countries;
        }

        public void setCountries(List<Country> countries) {
            this.countries = countries;
        }
    }
}
