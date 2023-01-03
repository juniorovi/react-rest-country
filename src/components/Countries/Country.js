import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className='CountryOtherFile'>
            <h1>Country Name: {props.name}</h1>
        </div>
    );
};

export default Country;