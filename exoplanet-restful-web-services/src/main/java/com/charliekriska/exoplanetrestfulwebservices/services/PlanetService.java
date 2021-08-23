package com.charliekriska.exoplanetrestfulwebservices.services;

import com.charliekriska.exoplanetrestfulwebservices.entity.PlanetEntity;

import java.util.List;

public interface PlanetService {

    public List<PlanetEntity> findAll();
    public PlanetEntity findById(int id);
    public void save(PlanetEntity planetEntity);
    public void deleteById(int id);

}
