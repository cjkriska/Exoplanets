import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import InfoBox from './InfoBox';
import PlanetInfo from './PlanetInfo';
import terrestrial from '../Images/terrestrial.png';
import superEarth from '../Images/super-earth.png';
import neptuneLike from '../Images/neptune-like.png';
import gasGiant from '../Images/gas-giant.png';

function Content(props) {

    const {planet, system, close} = props;

    const [currPlanet, setCurrPlanet] = useState(planet);
    const [isRealistic, setIsRealistic] = useState(true);

    // Calculates pixel width of planet based on pl_rade (radius)
    const calcPlanetDiam = (radius) => {
        let maxPlanetRadius = 33.6;
        let minPlanetRadius = 0.296;
        if(radius > maxPlanetRadius) maxPlanetRadius = radius;
        return (radius - minPlanetRadius)*(90/(maxPlanetRadius-minPlanetRadius)) + 10;
    };

    // Finds planet type image based on mass
    const findPlanetType = (planet) => {
        if(planet.pl_bmasse >= 0.01 && planet.pl_bmasse < 2) {
            return terrestrial;
        } else if(planet.pl_bmasse >= 2 && planet.pl_bmasse < 10) {
            return superEarth;
        } else if(planet.pl_bmasse >= 10 && planet.pl_bmasse < 50) {
            return neptuneLike;
        } else if(planet.pl_bmasse >= 50) {
            return gasGiant;
        }
    }

    // Calculates planet color based on temperature
    const calcPlanetColor = (temp) => {
        if(temp === 0) return "rgb(150, 150, 150)";
        let maxTemp = 4050;
        let minTemp = 3.8;
        let red = 0, green = 0, blue = 0;
        if(temp >= 273 && temp <= 373) {
            green = 255;
            if(temp < 323) {
                red = 100 - (temp-273)*2;
            } else {
                blue = (temp-323)*2
            }
        } else if(temp < 273) {
            blue = 255;
            green = 255*(temp-minTemp)/273;
        } else {
            red = 255;
            green = 255 - 255*(temp-373)/maxTemp;
        }

        return "rgb("+red+", "+green+", "+blue+")";
    };

    return (
        <div className="popup">
            <div className="close" onClick={close}>
                &times;
            </div>
            <div className="header">
                <Popup trigger={<button className="info-button"><i className="fas fa-info"></i></button>}
                       position="bottom right"
                       closeOnDocumentClick
                >
                    <InfoBox />
                </Popup>
                <h1>{planet.hostname} System</h1>
                <hr />
            </div>
            <div className="content">
                <div className="planet-container">
                    <ul>
                    {
                        system.map((pl, index) => 
                            <li key={index}
                                style={{
                                    color: currPlanet.pl_name === pl.pl_name ? "yellow" : ""
                                }}
                            >
                                {pl.pl_name}
                            </li>
                        )
                    }
                    </ul>
                    <PlanetInfo currPlanet={currPlanet}/>
                </div>
                <div className="system-container">
                    <div className={"star " + (planet.st_spectype ? planet.st_spectype.charAt(0) : "")}/>
                    {
                        system.map((pl, index) =>
                            <div onClick={() => {setCurrPlanet(pl)}}
                                 className="planet clickable"
                                 style={{
                                            width: calcPlanetDiam(pl.pl_rade), 
                                            height: calcPlanetDiam(pl.pl_rade),
                                            backgroundImage: isRealistic ? "url("+findPlanetType(pl)+")" : "radial-gradient(circle at "+ calcPlanetDiam(pl.pl_rade)/3 +"px " + calcPlanetDiam(pl.pl_rade)/3 + "px, " + calcPlanetColor(pl.pl_eqt) + ", #000)",
                                            backgroundSize: "contain",
                                            boxShadow: currPlanet.pl_name === pl.pl_name ? "0 0 6px 4px rgba(255, 255, 255, 0.5)" : ""
                                        }}
                                 key={index}
                            />
                        )
                    }
                </div>
                <button onClick={() => {setIsRealistic(!isRealistic)}} className="btn btn-dark clickable real-mode">{isRealistic ? "Real Mode On" : "Temp Mode On"}</button>
            </div>
        </div>
    );

};

export default Content;