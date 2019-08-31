import React , { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Card from './components/profile';
import styled from 'styled-components';

const styledDiv = styled.div`
  display: flex;
  flex-direction: row;
  `
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [results, setResults] = useState([]);

  useEffect(() => {
    function getData(){
      axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
          setResults(res.data.results);
        })
        .catch(err => console.log(err))
    }
    getData();
  },[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className='cards'>
      {results.map(person => {
        return <Card key={person} person={person}/>;
      })}
      </div>
    </div>
  );
}

export default App;
