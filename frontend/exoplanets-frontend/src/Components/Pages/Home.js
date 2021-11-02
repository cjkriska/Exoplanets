import React, {useState, useEffect} from 'react';
import {useAlert} from 'react-alert';
import Popup from 'reactjs-popup';
import Content from '../Content';
import 'reactjs-popup/dist/index.css';

function Home(props) {

    const [data, setData] = useState([]);

    const [nameSortAsc, setNameSortAsc] = useState(false);
    const [hostnameSortAsc, setHostnameSortAsc] = useState(false);
    const [massSortAsc, setMassSortAsc] = useState(false);
    const [radiusSortAsc, setRadiusSortAsc] = useState(false);
    const [tempSortAsc, setTempSortAsc] = useState(false);
    const [discMethodSortAsc, setDiscMethodSortAsc] = useState(false);
    const [discYearSortAsc, setDiscYearSortAsc] = useState(false);
    const [distanceSortAsc, setDistanceSortAsc] = useState(false);
    const [planetSortAsc, setPlanetSortAsc] = useState(false);
    const [specTypeSortAsc, setSpecTypeSortAsc] = useState(false);
  
    useEffect(() => {
      setData(props.planetData);
    }, [props.planetData]);

    const alert = useAlert();

    const handleSaveClick = (planet) => {
        console.log(planet);
        fetch("https://vast-wave-53428.herokuapp.com/api/saved-planets", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(planet)
        }).then(
            () => alert.show("Saved " + planet.pl_name + " to Saved Planets!")
        );

    };



    // Sorting functions ----------------------------------------------------------
    const sortByName = () => {
        let d = [...data];
        if(!nameSortAsc) {
        setData(d.sort((a,b) => (a.pl_name > b.pl_name) ? 1 : -1));
        setNameSortAsc(true);
        } else {
        setData(d.sort((a,b) => (a.pl_name > b.pl_name) ? -1 : 1));
        setNameSortAsc(false);
        }
    };
    const sortByHostname = () => {
        let d = [...data];
        if(!hostnameSortAsc) {
        setData(d.sort((a,b) => (a.hostname > b.hostname) ? 1 : -1));
        setHostnameSortAsc(true);
        } else {
        setData(d.sort((a,b) => (a.hostname > b.hostname) ? -1 : 1));
        setHostnameSortAsc(false);
        }
    };
    const sortByPlanNum = () => {
        let d = [...data];
        if(!planetSortAsc) {
        setData(d.sort((a,b) => (findSystem(a).length > findSystem(b).length) ? 1 : -1));
        setPlanetSortAsc(true);
        } else {
        setData(d.sort((a,b) => (findSystem(a).length > findSystem(b).length) ? -1 : 1));
        setPlanetSortAsc(false);
        }
    };
    const sortByMass = () => {
        let d = [...data];
        setData(d.sort(
            (a,b) => {
                if(a.pl_bmasse === b.pl_bmasse) {
                    return 0;
                } else if(a.pl_bmasse === 0) {
                    return 1;
                } else if(b.pl_bmasse === 0) {
                    return -1;
                } else if(!massSortAsc) {
                    return a.pl_bmasse > b.pl_bmasse ? 1 : -1;
                } else {
                    return a.pl_bmasse > b.pl_bmasse ? -1 : 1;
                }
            }
        ));
        setMassSortAsc(!massSortAsc);
    };
    const sortByRadius = () => {
        let d = [...data];
        setData(d.sort(
            (a,b) => {
                if(a.pl_rade === b.pl_rade) {
                    return 0;
                } else if(a.pl_rade === 0) {
                    return 1;
                } else if(b.pl_rade === 0) {
                    return -1;
                } else if(!radiusSortAsc) {
                    return a.pl_rade > b.pl_rade ? 1 : -1;
                } else {
                    return a.pl_rade > b.pl_rade ? -1 : 1;
                }
            }
        ));
        setRadiusSortAsc(!radiusSortAsc);
    };
    const sortByTemp = () => {
        let d = [...data];
        setData(d.sort(
            (a,b) => {
                if(a.pl_eqt === b.pl_eqt) {
                    return 0;
                } else if(a.pl_eqt === 0) {
                    return 1;
                } else if(b.pl_eqt === 0) {
                    return -1;
                } else if(!tempSortAsc) {
                    return a.pl_eqt > b.pl_eqt ? 1 : -1;
                } else {
                    return a.pl_eqt > b.pl_eqt ? -1 : 1;
                }
            }
        ));
        setTempSortAsc(!tempSortAsc);
    };
    const sortByDiscMethod = () => {
        let d = [...data];
        if(!discMethodSortAsc) {
        setData(d.sort((a,b) => (a.discoverymethod > b.discoverymethod) ? 1 : -1));
        setDiscMethodSortAsc(true);
        } else {
        setData(d.sort((a,b) => (a.discoverymethod > b.discoverymethod) ? -1 : 1));
        setDiscMethodSortAsc(false);
        }
    };
    const sortByDiscYear = () => {
        let d = [...data];
        if(!discYearSortAsc) {
        setData(d.sort((a,b) => (a.disc_year > b.disc_year) ? 1 : -1));
        setDiscYearSortAsc(true);
        } else {
        setData(d.sort((a,b) => (a.disc_year > b.disc_year) ? -1 : 1));
        setDiscYearSortAsc(false);
        }
    };
    const sortByDistance = () => {
        let d = [...data];
        setData(d.sort(
            (a,b) => {
                if(a.sy_dist === b.sy_dist) {
                    return 0;
                } else if(a.sy_dist === 0) {
                    return 1;
                } else if(b.sy_dist === 0) {
                    return -1;
                } else if(!distanceSortAsc) {
                    return a.sy_dist > b.sy_dist ? 1 : -1;
                } else {
                    return a.sy_dist > b.sy_dist ? -1 : 1;
                }
            }
        ));
        setDistanceSortAsc(!distanceSortAsc);
    };
    const sortBySpectype = () => {
        let d = [...data];
        setData(d.sort(
            (a,b) => {
                if(a.st_spectype === b.st_spectype) {
                    return 0;
                } else if(a.st_spectype === null) {
                    return 1;
                } else if(b.st_spectype === null) {
                    return -1;
                } else if(!specTypeSortAsc) {
                    return a.st_spectype > b.st_spectype ? 1 : -1;
                } else {
                    return a.st_spectype > b.st_spectype ? -1 : 1;
                }
            }
        ));
        setSpecTypeSortAsc(!specTypeSortAsc);
    };
    // ----------------------------------------------------------------------------

    // Takes planet and returns array of planets with same host
    // Sorts by distance from star
    const findSystem = (planet) => {
        let pl_array = [];
        for(let i=0; i < data.length; i++) {
            if(data[i].hostname === planet.hostname) {
                pl_array.push(data[i]);
            }
        }
        pl_array.sort((a,b) => (a.pl_orbsmax > b.pl_orbsmax) ? 1 : -1);
        return pl_array;
    };

    return (
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Planet Name <i onClick={sortByName} className="fas fa-sort clickable"></i></th>
                        <th>Hostname <i onClick={sortByHostname} className="fas fa-sort clickable"></i></th>
                        <th>SpecType <i onClick={sortBySpectype} className="fas fa-sort clickable"></i></th>
                        <th># Planets <i onClick={sortByPlanNum} className="fas fa-sort clickable"></i></th>
                        <th>Mass <i onClick={sortByMass} className="fas fa-sort clickable"></i></th>
                        <th>Radius <i onClick={sortByRadius} className="fas fa-sort clickable"></i></th>
                        <th>Temp (K) <i onClick={sortByTemp} className="fas fa-sort clickable"></i></th>
                        <th>Discovery Method <i onClick={sortByDiscMethod} className="fas fa-sort clickable"></i></th>
                        <th>Discovery Year <i onClick={sortByDiscYear} className="fas fa-sort clickable"></i></th>
                        <th>Distance (LY) <i onClick={sortByDistance} className="fas fa-sort clickable"></i></th>
                        <th>Save</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((planet, index) => 
                                <tr key={index}>
                                    <td>{planet.pl_name} <i onClick={() => {window.open("https://en.wikipedia.org/wiki/" + planet.pl_name, "_blank")}} className="fab fa-wikipedia-w clickable"></i></td>
                                    <Popup modal trigger={<td className="clickable">{planet.hostname}</td>}>
                                        {close => <Content planet={planet} system={findSystem(planet)} close={close}/>}
                                    </Popup>
                                    <td>{planet.st_spectype}</td>
                                    <td>{findSystem(planet).length}</td>
                                    <td>{planet.pl_bmasse.toFixed(2)}</td>
                                    <td>{planet.pl_rade}</td>
                                    <td>{planet.pl_eqt}</td>
                                    <td>{planet.discoverymethod}</td>
                                    <td>{planet.disc_year}</td>
                                    <td>{(planet.sy_dist*3.26156).toFixed(2)}</td> 
                                    <td>
                                        <button onClick={() => {handleSaveClick(planet)}} className="btn btn-outline-success btn-sm">Save</button>
                                    </td>
                                </tr>
                        
                    )}
                </tbody>
            </table>
    );
}

export default Home;