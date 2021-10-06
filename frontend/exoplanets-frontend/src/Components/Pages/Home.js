import React, {useState, useEffect} from 'react';
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
  
    useEffect(() => {
      setData(props.planetData);
    }, [props.planetData]);

    const handleSaveClick = (planet) => {
        console.log(planet);
        fetch("http://localhost:8080/api/saved-planets", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(planet)
        });
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
    const sortByMass = () => {
        let d = [...data];
        if(!massSortAsc) {
        setData(d.sort((a,b) => (a.pl_bmasse > b.pl_bmasse) ? 1 : -1));
        setMassSortAsc(true);
        } else {
        setData(d.sort((a,b) => (a.pl_bmasse > b.pl_bmasse) ? -1 : 1));
        setMassSortAsc(false);
        }
    };
    const sortByRadius = () => {
        let d = [...data];
        if(!radiusSortAsc) {
        setData(d.sort((a,b) => (a.pl_rade > b.pl_rade) ? 1 : -1));
        setRadiusSortAsc(true);
        } else {
        setData(d.sort((a,b) => (a.pl_rade > b.pl_rade) ? -1 : 1));
        setRadiusSortAsc(false);
        }
    };
    const sortByTemp = () => {
        let d = [...data];
        if(!tempSortAsc) {
        setData(d.sort((a,b) => (a.pl_eqt > b.pl_eqt) ? 1 : -1));
        setTempSortAsc(true);
        } else {
        setData(d.sort((a,b) => (a.pl_eqt > b.pl_eqt) ? -1 : 1));
        setTempSortAsc(false);
        }
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
        if(!distanceSortAsc) {
        setData(d.sort((a,b) => (a.sy_dist > b.sy_dist) ? 1 : -1));
        setDistanceSortAsc(true);
        } else {
        setData(d.sort((a,b) => (a.sy_dist > b.sy_dist) ? -1 : 1));
        setDistanceSortAsc(false);
        }
    };
    // ----------------------------------------------------------------------------

    return (
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Planet Name <i onClick={sortByName} className="fas fa-sort"></i></th>
                        <th>Hostname <i onClick={sortByHostname} className="fas fa-sort"></i></th>
                        <th>Mass <i onClick={sortByMass} className="fas fa-sort"></i></th>
                        <th>Radius <i onClick={sortByRadius} className="fas fa-sort"></i></th>
                        <th>Temp (K) <i onClick={sortByTemp} className="fas fa-sort"></i></th>
                        <th>Discovery Method <i onClick={sortByDiscMethod} className="fas fa-sort"></i></th>
                        <th>Discovery Year <i onClick={sortByDiscYear} className="fas fa-sort"></i></th>
                        <th>Distance <i onClick={sortByDistance} className="fas fa-sort"></i></th>
                        <th>Save</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((planet, index) => 
                        <Popup  key={index} modal trigger={
                            <tr>
                                <td>{planet.pl_name}</td>
                                <td>{planet.hostname}</td>
                                <td>{planet.pl_bmasse}</td>
                                <td>{planet.pl_rade}</td>
                                <td>{planet.pl_eqt}</td>
                                <td>{planet.discoverymethod}</td>
                                <td>{planet.disc_year}</td>
                                <td>{planet.sy_dist}</td>
                                <td>
                                    <button onClick={() => {handleSaveClick(planet)}} className="btn btn-outline-success btn-sm">Save</button>
                                </td>
                            </tr>
                        }>
                            {close => <Content planet={planet} close={close}/>}
                        </Popup>
                    )}
                </tbody>
            </table>
    );
}

export default Home;