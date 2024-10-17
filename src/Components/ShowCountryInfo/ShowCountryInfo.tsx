import React, { useEffect, useState } from 'react';
import { Country } from '../../types';
import './ShowCountryInfo.css';

interface ShowCountryInfoProps {
  selectedCountry: Country | null;
}

const ShowCountryInfo: React.FC<ShowCountryInfoProps> = ({ selectedCountry }) => {
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    if (selectedCountry) {
      setCountry(selectedCountry);
    }
  }, [selectedCountry]);

  return (
    <>
      {country ? (
        <div className='rightSideContainer'>
          <div>
            <h2>{country.name}</h2>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Region:</strong> {country.region}</p>
          </div>
          <div>
            <img src={country.flag} alt={`${country.name}`} style={{width: '300px'}}/>
          </div>
        </div>
      ) : (
        <h2>Select a country</h2>
      )}
    </>
  );
};

export default ShowCountryInfo;
