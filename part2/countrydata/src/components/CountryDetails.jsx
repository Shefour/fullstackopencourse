import React, { useEffect, useState } from 'react';

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_SOME_KEY;
    const capital = country.capital[0];

    if (apiKey && capital) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => console.error('Error fetching weather:', error));
    }
  }, [country]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area} sq km</p>
      <b>languages:</b>
          <ul>
            {Object.entries(country.languages).map(language => <li key={language[0]}>{language[1]}</li>)}
          </ul>
          <img src={country.flags.png} height="100em" width="150em" />
          {weather && (
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          {weather.weather && weather.weather[0] && (
              <img
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt="Weather Icon"
              />
          )}
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};
export default CountryDetails;
