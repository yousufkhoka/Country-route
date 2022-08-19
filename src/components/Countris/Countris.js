import React from 'react';
import { NavLink } from 'react-router-dom';
import './Countris.css'


const Countris = (props) => {
    console.log(props.country)
    const { name:{common}, capital, flags:{png} } = props.country;

    return (
        <div className='countris'>
            <div><img src={png} alt="" /></div>
            <h2>Country : {common}</h2>
            <h3>Capital : {capital}</h3>
            
            <NavLink
            to={`country/${common}`}
            
            >country Detail</NavLink>
            
        </div>
    );
};

export default Countris;