import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const course = {
		name: 'Mearn Stack Development',
		parts: [
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
	}

	return (
		<div>
			<h1>{course.name}</h1>
			<Content course={course} />
			<Total course={course} />
		</div>
	)
};

const Content = (props) => {
	const lists = props.course.parts.map(function(item) {
		return (
			<div>
				<p>{item.name}: {item.exercises}</p>
			</div>
		)
	})
	
	return lists
};

const Total = (props) => {
	var score = 0
	
	const lists = props.course.parts.map(function(item) {
		
		score = score + item.exercises
		
		return score
	})
	
	return (
		<div>
			<p>Number of exercises: {score}</p>
		</div>
	)
};

export default App;
