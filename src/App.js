import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios'
import StarWarsShips from './components/StarWarsShips'
import StarshipInfo from './components/StarWarsShips'
import './App.css';
import { Router } from 'express';

function App() {
  const [ships, setShips] = useState([])

  const handleSubmit = () => {
   
    const url = `https://swapi.dev/api/starships/`
    axios.get(url).then(ships => {
      setShips(ships.data.results)
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    handleSubmit()
  }, []) 

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <p>Star Wars Ships</p>
      </header>
      <div>
        <Route path="/starships" render={(routeInfo) => {return <StarshipInfo shipInfo ={routeInfo} />}} />
        <Route path="/" render={() =>{return <StarWarsShips ships={ships} />}} />
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
