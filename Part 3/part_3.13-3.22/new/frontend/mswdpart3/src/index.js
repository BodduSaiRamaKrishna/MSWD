import axios from "axios";
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Axios from "./Axios.js";
import cors from "cors"

const Notification = (props) => {
	const style = {
		color: "green",
		fontSize: 30,
		border: "2px solid green",
		borderRadius: "10px",
		margin: "20px",
		paddingLeft: "20px"
	}
	
	if (props.message === null) {
		return null
	} else {
		return (
			<div style = {style}>
				{props.message}
			</div>
		)
	}
}

const App = () => {
	
	const [ persons, setPersons ] = useState([])
	const [ newName, setNewName ] = useState("")
	const [ newNumber, setNewNumber ] = useState("")
	const [ search, setSearch ] = useState("")
	const [ showAll, setShowAll ] = useState(false)
	const [ message, setMessage ] = useState("")
	
	
	
	useEffect(() => {
		Axios
			.getAll()
			.then(response => setPersons(response))
	} , [])
	
	const addPersons = (event) => {
		
		const newObject = {
			name: newName,
			number: newNumber
		}
		
		Axios
			.create(newObject)
			.then(response => setPersons(persons.concat(response)))
			

		
		setNewName("")
		setNewNumber("")
		
		
		setMessage(newName + " Added")
		setTimeout(()=>setMessage(null), 2000)
	}
	
	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}
	
	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}
	
	const handleSearch = (event) => {
		setSearch(event.target.value)
		setShowAll(true)
	}
	
	const Filter = (query) => {
		const filter_result = persons.filter(person => person.name.toLowerCase().split(" ").join("").indexOf(query.toLowerCase()) !== -1)
		
		return filter_result
	}
	
	const displayToShow = showAll
	? Filter(search)
	: persons
	
	const handleDelete = (id) => {
		
		Axios
			.getOne(id)
			.then(response => {
				const result = window.confirm("Do you really want to delete " + response.name)
		
					if (result) {
						Axios
							.deleteObject(id)
							.then(response => console.log(response))
					} 
					
				setTimeout(() => {
					Axios
						.getAll()
						.then(response => setPersons(response))
				}, 1000)
			})
	}

	const handleChange = (name) => {
		const person = persons.find(n => n.name === name) 
		const change = {...person, number:newNumber}
		const id = person.id 
		
		const result = window.confirm(name + " is already added to Phonebook, replace the old number with a new one?")
		
		if (result) {
			Axios
				.update(id, change)
				.then(response => setPersons(persons.map(person => person.id === id ? response : person)))
		}
  }
	return (
		<div>
			<h2>Phonebook</h2>
			Search by Name: <input value = {search} onChange = {handleSearch} />
			<Notification message = {message} />
			<h2>Add A New Contact</h2>
			<form onSubmit = {addPersons}>
				Name: <input value = {newName} onChange = {handleNameChange} />
				&nbsp; &nbsp; &nbsp;
				Number: <input value = {newNumber} onChange = {handleNumberChange} />
				<br/>
				<button type = "submit">ADD</button>
			</form>
			<br/>
			<form onSubmit = {() => handleChange(newName)}>
				<button type = "submit">Change Contact</button>
			</form>
			<h2>Numbers</h2>
			{displayToShow.map(person => {
				return(
					<div key = {person.id}>
						<p>{person.name}: {person.number}</p>
						<button onClick = {() => handleDelete(person.id)}>Delete</button>
					</div>
				)})
			}
		</div>
	)
}

ReactDOM.render(
  <App />, 
  document.getElementById('root'))
