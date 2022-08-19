import React, { useEffect, useState } from 'react';
import Countris from '../Countris/Countris';

const Home = () => {
     const [countris , setCountris]=useState([])
     useEffect(()=> {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountris(data))
     },[])
     console.log(countris)
    return (
        <div>
            <h1>Countris : {countris.length}</h1>
           {
            
            countris.map(country => <Countris country ={country}></Countris>)

           }
        </div>
    );
};

export default Home;