import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './CountryDetail.css'

const CountryDetail = () => {
    const {countryName} = useParams()
    const [country , setCountry]=useState({})
    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
        .catch(error => console.log('error',error))
    },[])
  
    console.log(country)
       

    return (
        <div className='countryDelats countris'>
            <h1>Name : <small>{countryName}</small></h1>
            <div className="CountryDelat">
            
           <h2>Official : <small>{country.name.official}</small></h2>
            <h4>Languages : <small>{country.languages.ara}</small> </h4>
            <h4>population : <small>{country.population}</small></h4>
            <h4>region : <small>{country.region}</small></h4>
            <h4>subregion : <small>{country.subregion}</small></h4>
            <h4>area : <small>{country.area}</small></h4>
            </div>
            <div className="countryFlag">
                <img src={country.flags.png} alt="" />
            </div>
           
            
        </div>
    );
};

export default CountryDetail;