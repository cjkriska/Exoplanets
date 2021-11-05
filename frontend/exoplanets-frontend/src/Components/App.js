import React, {useState, useEffect} from 'react';
import Home from './Pages/Home';
import SavedPlanets from './Pages/SavedPlanets';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://vast-wave-53428.herokuapp.com/list")
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(error => {console.log(error);
      });
  }, []);


  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ExoPlanets</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/savedplanets">My Saved Planets</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Planets Discovered: {data.length}</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                  </li> */}
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home planetData={data} />
        </Route>
        <Route path="/savedplanets">
          <SavedPlanets planetData={data}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
