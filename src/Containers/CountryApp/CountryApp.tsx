import React, { useCallback, useEffect, useState } from 'react';
import './CountryApp.css'
import AllCountries from '../../Components/AllCountries/AllCountries.tsx';
import axios from 'axios';
import ShowCountryInfo from '../../Components/ShowCountryInfo/ShowCountryInfo.tsx';
import { Country } from '../../types';

const CountryApp = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const request = await axios.get('https://restcountries.com/v2/all');
      const response = request.data;
      setCountries(response);
    } catch (e) {
      console.log('Error: ' + e);
    }
  }, [])



  useEffect(() => {
    void fetchData();
  }, [fetchData]);



  const countryClick = (country: Country) => {
    setSelectedCountry(country);
  };


  return (
    <div className='container'>
      <div className="leftSide">
        <AllCountries countries={countries} countryClick={countryClick}/>
      </div>
      <div className="rightSide">
        <ShowCountryInfo selectedCountry={selectedCountry}/>
      </div>
    </div>
  );
};

export default CountryApp;