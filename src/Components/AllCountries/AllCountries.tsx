import React from 'react';
import './AllCountries.css';
import { Country } from '../../types';

interface Props {
  countries: Country[];
  countryClick: (country: Country) => void;
}

const AllCountries: React.FC<Props> = ({countries, countryClick}) => {
  return (
    <div className='countriesList'>
      {countries.map(country => (
        <h4 key={country.alpha3Code} className="country" onClick={() => countryClick(country)}>
          {country.name}
          <hr/>
        </h4>
      ))}
    </div>
  );
};

export default AllCountries;