import React from 'react';

function Content(props) {

    const {planet, system, close} = props;

    // Calculates pixel width of planet based on pl_rade (radius)
    const calcPlanetDiam = (radius) => {
        let maxPlanetRadius = 33.6;
        let minPlanetRadius = 0.296;
        if(radius > maxPlanetRadius) maxPlanetRadius = radius;
        return (radius - minPlanetRadius)*(90/(maxPlanetRadius-minPlanetRadius)) + 10;
    };

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
        <div>
            <div className="close" onClick={close}>
                &times;
            </div>
            <div className="header"><h1>{planet.hostname} System</h1></div>
            <div className="content">
                <ul>
                {
                    system.map((planet, index) => 
                        <li key={index}>{planet.pl_name}</li>
                    )
                }
                </ul>
                <div className="system-container">
                    <div className="star"/>
                    {
                        system.map((planet, index) =>
                            <div className="planet" style={{width: calcPlanetDiam(planet.pl_rade), height: calcPlanetDiam(planet.pl_rade), backgroundColor: calcPlanetColor(planet.pl_eqt)}} key={index}/>
                        )
                    }
                </div>
            </div>
        </div>
    );

};

export default Content;