import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, area, flags}=props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Populations: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;