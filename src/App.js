import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCounrties></LoadCounrties>
      
    </div>
  );
}
function LoadCounrties(){
  const [countries, setCountries]=useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
      <h3>Visiting all available countries in the world</h3>
      <p>Available Countries: {countries.length}</p>
      {/* {
        countries.map(country=> console.log(country.name.common))
      } */}
      {/* {
        countries.map(country=> <p>{country.name.common}</p>)
      } */}
      {
        countries.map(country=><Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}
function Country(props){
  return(
    <div className='country'>
      <h3>Name: {props.name}</h3>
      <h4>Population: {props.population}</h4>
    </div>
  )
}

export default App;
