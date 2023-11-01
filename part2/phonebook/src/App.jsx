import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
      number: newNumber
    }

    if (!persons.some(p => p.name === newName)) {
      setPersons(persons.concat(person))
      setNewName("")
      setNewNumber("")
    }
    else {
      alert(newName + ' is already added to phonebook')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    console.log(newName)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilter = (event) => {
    setFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input onChange={handleNameFilter} /></p>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <br />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase())).map(person => <div key={person.name}> {person.name} {person.number} </div>)}
    </div>
  )
}

export default App