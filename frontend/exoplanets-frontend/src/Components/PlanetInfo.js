import React from 'react';

function PlanetInfo({currPlanet}) {

    const {pl_name, hostname, pl_bmasse, pl_rade, pl_eqt, discoverymethod, disc_year, sy_dist, pl_orbsmax} = currPlanet;

    const findPlanetType = () => {
        if(pl_bmasse >= 0.01 && pl_bmasse < 2) {
            return "Terrestrial";
        } else if(pl_bmasse >= 2 && pl_bmasse < 10) {
            return "Super-Earth";
        } else if(pl_bmasse >= 10 && pl_bmasse < 50) {
            return "Neptune-Like";
        } else if(pl_bmasse >= 50) {
            return "Gas-Giant";
        }
    }

    const planetType = findPlanetType();
    
    return (
        <div className="planet-info-type-box">
            <div className="planet-info">
                <div className="planet-name">{pl_name.charAt(0).toUpperCase() + pl_name.substring(1)}</div>
                <div><b>Type:</b> {planetType}</div>
                <div><b>Host:</b> {hostname}</div>
                <div><b>Mass (Earths):</b> {pl_bmasse}</div>
                <div><b>Radius (Earths):</b> {pl_rade}</div>
                <div><b>Temp (K):</b> {pl_eqt}</div>
                <div><b>Disc Method:</b> {discoverymethod}</div>
                <div><b>Disc Year:</b> {disc_year}</div>
                <div><b>Distance (LY):</b> {(sy_dist*3.26156).toFixed(2)}</div>
                <div><b>Dist from Star (AU):</b> {pl_orbsmax.toFixed(2)}</div>
            </div>
            <div className={"planet-type " + planetType}/>
        </div>
    );
}

export default PlanetInfo;