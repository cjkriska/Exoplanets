package com.charliekriska.exoplanetrestfulwebservices.controllers;

import com.charliekriska.exoplanetrestfulwebservices.entity.PlanetEntity;
import com.charliekriska.exoplanetrestfulwebservices.services.PlanetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SavedPlanetsRestController {

    private PlanetService planetService;

    @Autowired
    public SavedPlanetsRestController(PlanetService planetService) {
        this.planetService = planetService;
    }

    @CrossOrigin(origins = {"http://localhost:3000", "https://exoplanets-explorer.herokuapp.com"})
    @GetMapping("/saved-planets")
    public List<PlanetEntity> findAll() {
        return planetService.findAll();
    }
    
    // TODO
    @GetMapping("/saved-planets/{planetId}")
    public PlanetEntity getPlanet(@PathVariable int planetId) {
        return null;
    }

    @CrossOrigin(origins = {"http://localhost:3000", "https://exoplanets-explorer.herokuapp.com"})
    @PostMapping("/saved-planets")
    public PlanetEntity addPlanet(@RequestBody PlanetEntity planetEntity) {
        planetEntity.setId(0);
        planetService.save(planetEntity);
        return planetEntity;
    }


    // TODO - May not need method to update
    @PutMapping("/saved-planets")
    public PlanetEntity updatePlanet(@RequestBody PlanetEntity planetEntity) {
        planetService.save(planetEntity);
        return planetEntity;
    }


    @CrossOrigin(origins = {"http://localhost:3000", "https://exoplanets-explorer.herokuapp.com"})
    @DeleteMapping("saved-planets/{planetId}")
    public String deletePlanet(@PathVariable int planetId) {
        PlanetEntity planetEntity = planetService.findById(planetId);
        if(planetEntity == null) {
            throw new RuntimeException("PlanetEntity id not found: " + planetId);
        }
        planetService.deleteById(planetId);
        return "Deleted planetEntity id: " + planetId;
    }

}
