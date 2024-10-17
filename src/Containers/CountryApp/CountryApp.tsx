import React, { useCallback, useEffect, useState } from 'react';
import './CountryApp.css'
import AllCountries from '../../Components/AllCountries/AllCountries.tsx';
import axios from 'axios';

const CountryApp = () => {
  const [countries, setCountries] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const request =await axios.get('https://restcountries.com/v2/all');
      const response = request.data;
      setCountries(response);
    } catch (e) {
      console.log('Error: ' + e);
    }
  }, [])

  useEffect(() => {
    void fetchData();
  }, [fetchData]);


  return (
    <div className='container'>
      <AllCountries countries={countries}/>
    </div>
  );
};

export default CountryApp;