import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, area}=props.country;
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <p>Populations: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;