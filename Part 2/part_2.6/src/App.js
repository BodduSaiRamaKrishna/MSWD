import React, { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [ persons, setPersons ] = useState(props.Phonebokk) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number:newNumber,
      id: persons.length + 1,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addName}>
          <div>
            Name: <input value={newName} onChange={handleNameChange}/>
            <br/>
            Number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <div>
          {newName}
          <br/>
          {newNumber}
        </div>
      </div>
    )
}

export default App
