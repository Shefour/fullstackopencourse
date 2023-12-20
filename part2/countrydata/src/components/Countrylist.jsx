import React from 'react';

const CountryList = ({ countries, onSelect }) => {
  return (
    <div>
      <h2>Matching Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            <button onClick={() => onSelect(country)}>{country.name.common}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
