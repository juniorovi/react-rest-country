import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h1>Country Name: {props.name}</h1>
            <p>Populations: {props.population}</p>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;