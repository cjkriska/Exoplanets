package com.charliekriska.exoplanetrestfulwebservices.controllers;

import com.charliekriska.exoplanetrestfulwebservices.models.Planet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
public class PlanetListController {

    private RestTemplate restTemplate;
    private String url;

    public PlanetListController() {}
    @Autowired
    public PlanetListController(RestTemplate restTemplate, @Value("${exo.api.url}") String url) {
        this.restTemplate = restTemplate;
        this.url = url;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/list")
    public List<Planet> getPlanets() {
        ResponseEntity<List<Planet>> responseEntity = restTemplate.exchange(url, HttpMethod.GET, null,
                new ParameterizedTypeReference<List<Planet>>() {});

        List<Planet> planets = responseEntity.getBody();
        return planets;
    }

}
