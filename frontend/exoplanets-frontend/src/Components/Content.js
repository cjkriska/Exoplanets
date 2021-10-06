import React from 'react';

function Content(props) {

    const {planet, close} = props;

    return (
        <div>
            <div className="close" onClick={close}>
                &times;
            </div>
            <div className="header"><h1>{planet.pl_name}</h1></div>
            <div className="content">
                <ul>
                    <li>Planet: {planet.pl_name}</li>
                    <li>Host: {planet.hostname}</li>
                    <li>Mass: {planet.pl_bmasse}</li>
                    <li>Radius: {planet.pl_rade}</li>
                    <li>Temp: {planet.pl_eqt}</li>
                    <li>Disc Method: {planet.discoverymethod}</li>
                    <li>Disc Year: {planet.disc_year}</li>
                    <li>Distance: {planet.sy_dist}</li>
                </ul>
            </div>
        </div>
    );

};

export default Content;