package com.charliekriska.exoplanetrestfulwebservices.services;

import com.charliekriska.exoplanetrestfulwebservices.dao.PlanetRepository;
import com.charliekriska.exoplanetrestfulwebservices.entity.PlanetEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlanetServiceImpl implements PlanetService {

    private PlanetRepository planetRepository;

    @Autowired
    public PlanetServiceImpl(PlanetRepository planetRepository) {
        this.planetRepository = planetRepository;
    }

    @Override
    public List<PlanetEntity> findAll() {
        return planetRepository.findAll();
    }

    @Override
    public PlanetEntity findById(int id) {
        Optional<PlanetEntity> result = planetRepository.findById(id);
        PlanetEntity planetEntity = null;
        if(result.isPresent()) {
            planetEntity = result.get();
        } else {
            throw new RuntimeException("Did not find planetEntity id: " + id);
        }
        return planetEntity;
    }

    @Override
    public void save(PlanetEntity planetEntity) {
        planetRepository.save(planetEntity);
    }

    @Override
    public void deleteById(int id) {
        planetRepository.deleteById(id);
    }
}
