import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryList from './components/Countrylist';
import CountryDetails from './components/CountryDetails';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`);
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="countrySearch">Find a country: </label>
        <input
          type="text"
          id="countrySearch"
          value={searchQuery}
          onChange={handleSearch}
        />
      </form>

      {countries.length > 0 && <CountryList countries={countries} onSelect={handleCountrySelect} />}

      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
};

export default App;
