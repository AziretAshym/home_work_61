import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

interface BorderCountriesProps {
  borders: string[];
}

const BorderCountries: React.FC<BorderCountriesProps> = ({ borders }) => {
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  const fetchBorderCountries = useCallback(async () => {
    try {
      const borderPromises = borders.map((code) =>
        axios.get(`https://restcountries.com/v2/alpha/${code}?fields=name`),
      );
      const responses = await Promise.all(borderPromises);
      const countryNames = responses.map((response) => response.data.name);
      setBorderCountries(countryNames);
    } catch (error) {
      console.error("Error fetching border countries:", error);
    }
  }, [borders]);

  useEffect(() => {
    if (borders.length > 0) {
      fetchBorderCountries();
    } else {
      setBorderCountries([]);
    }
  }, [borders, fetchBorderCountries]);

  return (
    <>
      {borderCountries.length > 0 ? (
        <div>
          <h3>Bordering Countries:</h3>
          {borderCountries.map((borderCountry, index) => (
            <p key={index} style={{ margin: "0 0 10px 0" }}>
              {borderCountry}
            </p>
          ))}
        </div>
      ) : (
        <p>No bordering countries</p>
      )}
    </>
  );
};

export default BorderCountries;
