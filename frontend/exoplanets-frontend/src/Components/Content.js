import React from 'react';
import Popup from 'reactjs-popup';

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
        <div className="popup">
            <div className="close" onClick={close}>
                &times;
            </div>
            <div className="header"><h1>{planet.hostname} System</h1></div>
            <div className="content">
                <Popup trigger={<button className="info-button"><i className="fas fa-info"></i></button>}
                       position="bottom right"
                       closeOnDocumentClick
                >
                    <span className="info-box">
                        <div className="info-stars">
                            <p style={{color: "white"}}>Star</p>
                            <div className="info-star" style={{backgroundColor: "violet"}}>O</div>
                            <div className="info-star" style={{backgroundColor: "rgb(104, 104, 255)"}}>B</div>
                            <div className="info-star" style={{backgroundColor: "cyan"}}>A</div>
                            <div className="info-star" style={{backgroundColor: "lightblue"}}>F</div>
                            <div className="info-star" style={{backgroundColor: "lightyellow"}}>G</div>
                            <div className="info-star" style={{backgroundColor: "orangered"}}>K</div>
                            <div className="info-star" style={{backgroundColor: "red"}}>M</div>
                            <div className="info-star" style={{backgroundColor: "#ffd900"}}>NA</div>
                        </div>
                        <div className="info-temps">
                            <p style={{color: "white"}}>Planet Temp</p>
                            <div className="info-temp1">0 - 273</div>
                            <div className="info-temp2" >273 - 373</div>
                            <div className="info-temp3" >373 - 4050</div>
                            <div className="info-temp4" >No Data</div>
                        </div>
                    </span>
                </Popup>
                <ul>
                {
                    system.map((planet, index) => 
                        <li key={index}>{planet.pl_name}</li>
                    )
                }
                </ul>
                <div className="system-container">
                    <div className={"star " + (planet.st_spectype ? planet.st_spectype.charAt(0) : "")}/>
                    {
                        system.map((planet, index) =>
                            <div className="planet" 
                                 style={{
                                            width: calcPlanetDiam(planet.pl_rade), 
                                            height: calcPlanetDiam(planet.pl_rade),
                                            background: "radial-gradient(circle at "+ calcPlanetDiam(planet.pl_rade)/3 +"px " + calcPlanetDiam(planet.pl_rade)/3 + "px, " + calcPlanetColor(planet.pl_eqt) + ", #000)"
                                        }} 
                                 key={index}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );

};

export default Content;