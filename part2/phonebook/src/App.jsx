import { useEffect, useState } from 'react';
import axios from 'axios';
import dbservice from './services/dbservice';
import Filter from './components/Filter';
import Persons from './components/Persons';
import './App.css';

const App = () => {
  const [filter, setFilter] = useState('');
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/persons');
        setPersons(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addName = async (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    try {
      const updatedPerson = await dbservice.create_person(personObject);
      setPersons((prevPersons) => {
        // If the person was updated, replace the old information
        const updatedPersons = prevPersons.map((person) =>
          person.id === updatedPerson.id ? updatedPerson : person
        );

        // If the person is not in the phonebook, add it
        if (!prevPersons.some((person) => person.id === updatedPerson.id)) {
          return [...updatedPersons, updatedPerson];
        }

        return updatedPersons;
      });
    } catch (error) {
      console.error('Error creating/updating person:', error);
    }

    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const deletePerson = async (id) => {
    const personToDelete = persons.find((p) => p.id === id);
    const shouldDelete = window.confirm(`Delete ${personToDelete.name}?`);

    if (shouldDelete) {
      try {
        await dbservice.delete_person(id);
        setPersons((prevPersons) => prevPersons.filter((person) => person.id !== id));
      } catch (error) {
        console.error('Error deleting person:', error);
      }
    }
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Filter handler={handleFilterChange} />
        <h2>add a new</h2>
        <form onSubmit={addName}>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
          <Persons persons={persons} filter={filter} deletePerson={deletePerson} />
        </ul>
      </div>
    </>
  );
};

export default App;
