import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h1>Country Name: {props.country.name.common}</h1>
            <p>Populations: {props.country.population}</p>
            <p>Area: {props.country.area}</p>
        </div>
    );
};

export default Country;