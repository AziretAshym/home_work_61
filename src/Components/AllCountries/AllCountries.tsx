import React from 'react';
import './AllCountries.css';

const AllCountries = ({countries}) => {
  return (
    <div className='countriesList'>
      {countries.map(country => (
        <h4 key={country.alpha3Code} className='country'>
          {country.name}
        </h4>
      ))}
    </div>
  );
};

export default AllCountries;