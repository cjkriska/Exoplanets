import React from 'react';

function InfoBox() {

    return (
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
    );
}

export default InfoBox;