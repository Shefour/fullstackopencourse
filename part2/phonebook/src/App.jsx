import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import dbservice from './services/dbservice'
import Filter from './components/Filter'
import Persons from './components/Persons'

// TODO REPAIR THE DAMN FILTER
// Line 61 changed from <Filter handler={handleFilterChange}></Filter> to <Filter handler={handleFilterChange}/>.

const App = () => {
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    }
    )
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      dbservice.create_person(personObject)
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }
  axios.get('http://localhost:3001/persons').then(response => {
    console.log(response)
  }
  )
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  const deletePerson = (id) => {
    dbservice.delete_person(id)
    setPersons(persons.filter(person => person.id !== id))
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Filter handler={handleFilterChange}/>
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
  )
}
export default App
