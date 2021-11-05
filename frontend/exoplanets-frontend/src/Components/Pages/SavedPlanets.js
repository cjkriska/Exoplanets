import { useEffect, useState } from "react";
import {useAlert} from 'react-alert';
import Popup from 'reactjs-popup';
import Content from '../Content';
import 'reactjs-popup/dist/index.css';


function SavedPlanets(props) {

    const [allData, setAllData] = useState([]);
    const [savedData, setSavedData] = useState([]);
    const [status, setStatus] = useState();

    useEffect((status) => {
        setAllData(props.planetData);
        fetch("https://vast-wave-53428.herokuapp.com/api/saved-planets")
          .then(res => res.json())
          .then(res => {
            setSavedData(res);
          })
          .catch(error => {console.log(error);
          });
      }, [status, props.planetData]);


    const alert = useAlert();

    
    const handleDeleteClick = (planet) => {
        fetch("https://vast-wave-53428.herokuapp.com/api/saved-planets/" + planet.id, {
            method: "DELETE",
        })
        .then(() => {
            setStatus("Delete Successful: " + planet.id);
            alert.show("Successfully Deleted " + planet.pl_name);
        });
    }

    // Takes planet and returns array of planets with same host
    // Sorts by distance from star
    const findSystem = (planet) => {
        let pl_array = [];
        for(let i=0; i < allData.length; i++) {
            if(allData[i].hostname === planet.hostname) {
                pl_array.push(allData[i]);
            }
        }
        pl_array.sort((a,b) => (a.pl_orbsmax > b.pl_orbsmax) ? 1 : -1);
        return pl_array;
    };

    return (
        <div>
            <h1>Saved Planets</h1>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Planet Name <i className="fas fa-sort"></i></th>
                        <th>Hostname <i className="fas fa-sort"></i></th>
                        <th>Mass <i className="fas fa-sort"></i></th>
                        <th>Radius <i className="fas fa-sort"></i></th>
                        <th>Temp (K) <i className="fas fa-sort"></i></th>
                        <th>Discovery Method <i className="fas fa-sort"></i></th>
                        <th>Discovery Year <i className="fas fa-sort"></i></th>
                        <th>Distance (LY)<i className="fas fa-sort"></i></th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {savedData.map((planet, index) => (
                        <tr key={index}>
                            <td>{planet.pl_name} <i onClick={() => {window.open("https://en.wikipedia.org/wiki/" + planet.pl_name, "_blank")}} className="fab fa-wikipedia-w clickable"></i></td>
                            <Popup modal trigger={<td className="clickable">{planet.hostname}</td>}>
                                {close => <Content planet={planet} system={findSystem(planet)} close={close}/>}
                            </Popup>
                            <td>{planet.pl_bmasse.toFixed(2)}</td>
                            <td>{planet.pl_rade}</td>
                            <td>{planet.pl_eqt}</td>
                            <td>{planet.discoverymethod}</td>
                            <td>{planet.disc_year}</td>
                            <td>{(planet.sy_dist*3.26156).toFixed(2)}</td>
                            <td>
                                <button onClick={() => {handleDeleteClick(planet)}} className="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SavedPlanets;