import React, { useState } from 'react'

const App = () => {
	const course = 'Mearn Stack Development'
	const parts = [
		{
		  name: 'MongoDB',
		  exercises: 10
		},
		{
            name: 'Express.js',
            exercises: 7
        },
        {
            name: 'Angular CLI',
            exercises: 14
        },
        {
            name: 'React.js',
            exercises: 5
        },
        {
            name: 'Node.js',
            exercises: 7
        }
	]

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	)
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
};

const Content = (props) => {
	const lists = props.parts.map(function(item) {
		return (
			<div>
				<p> {item.name}: {item.exercises}</p>
			</div>
		)
	})
	
	return lists
};

const Total = (props) => {
	var score = 0
	
	const lists = props.parts.map(function(item) {
		
		score = score + item.exercises 
		
	})
	
	return (
		<div>
			<p>Number of exercises: {score} </p>
		</div>
	)
};
export default App;
