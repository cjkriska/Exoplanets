import { useEffect, useState } from "react";


function SavedPlanets() {

    const [savedData, setSavedData] = useState([]);
    const [status, setStatus] = useState();

    useEffect((status) => {
        fetch("https://vast-wave-53428.herokuapp.com/api/saved-planets")
          .then(res => res.json())
          .then(res => {
            setSavedData(res);
          })
          .catch(error => {console.log(error);
          });
      }, [status]);

    
    const handleDeleteClick = (id) => {
        fetch("https://vast-wave-53428.herokuapp.com/api/saved-planets" + id, {
            method: "DELETE",
        })
        .then(() => setStatus("Delete Successful: " + id));
    }


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
                        <th>Distance <i className="fas fa-sort"></i></th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {savedData.map((planet, index) => (
                        <tr key={index}>
                            <td>{planet.pl_name}</td>
                            <td>{planet.hostname}</td>
                            <td>{planet.pl_bmasse}</td>
                            <td>{planet.pl_rade}</td>
                            <td>{planet.pl_eqt}</td>
                            <td>{planet.discoverymethod}</td>
                            <td>{planet.disc_year}</td>
                            <td>{planet.sy_dist}</td>
                            <td>
                                <button onClick={() => {handleDeleteClick(planet.id)}} className="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SavedPlanets;