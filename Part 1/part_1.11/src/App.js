import React, {useState} from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
	return (
		<div>
      <table>
         <tr>
            <td><h3>Good: {props.good}</h3></td>
         </tr>
         <tr>
            <td><h3>Neutral: {props.neutral}</h3></td>
         </tr>
         <tr>
            <td><h3>Bad: {props.bad}</h3></td>
         </tr>
         <tr>
            <td><h3>All: {props.All}</h3></td>
         </tr>
         <tr>
             <td><h3>Average: {props.average}</h3></td>
         </tr>
         <tr>
            <td><h3>Positive: {props.positive}</h3></td>
         </tr>
        </table>
     </div>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	
	return (
		<div>
			<h1>Please Give Feedback, Thank you!</h1><br/>
			<button onClick = {() => setGood(good - 1)}>Good</button>
			<button onClick = {() => setNeutral(neutral - 1)}>Neutral</button>
			<button onClick = {() => setBad(bad - 1)}>Bad</button>
			<br/>
			<h1>Statistics</h1>
			<br/>
			<Statistics 
				good={good} 
				neutral= {neutral} 
				bad= {bad} 
				All= {good + neutral + bad} 
				average= {(good - bad)/(good + neutral + bad)} 
				positive= {(good + neutral)/(good + neutral + bad)}
			/>
		</div>
	)
}

export default App;
