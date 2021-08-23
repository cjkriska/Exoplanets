package com.charliekriska.exoplanetrestfulwebservices.dao;

import com.charliekriska.exoplanetrestfulwebservices.entity.PlanetEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanetRepository extends JpaRepository<PlanetEntity, Integer> {
}
