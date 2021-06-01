import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
	const [index, setIndex] = useState(0)
	const [vote, setVote] = useState({
		0: 0,
		1: 0,
		2: 0,
		3: 5,
		4: 0,
		5: 0
	})
	
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
	]
	
	const handleChange = () => {
		setIndex(Math.floor(Math.random()*anecdotes.length))
	}
	
	const voteChange = () => {
		setVote({
			...vote,
			[index]: vote[index]+1
		})
	}
	
	const findMax = () => {
		let max = -1, maxKey = -1
		
		for(let key in vote) {
			if (vote[key] > max) {
				maxKey = key
				max = vote[key]
			}
		}
		return maxKey
	}
	
	return (
		<div>
			<h1>Anecdote of the Day</h1>
			<button onClick = {handleChange}>Next Anecdotes!!!</button><br/>
			<button onClick = {voteChange}>Vote</button>
			<h2>{anecdotes[index]}</h2>
			<h3>Has {vote[index]} Votes</h3><br/>
			<h1>Anecdote with most Votes</h1>
			<h3>{anecdotes[findMax()]}</h3>
		</div>
	)
}

export default App;
