import './App.css';
import React from 'react'

const Course = () => {
  const main='Web Development Curriculum'
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const part4 = 'Redux'
  const exercises4 = 11 
  const course1= 'Node.js'
  const part5= 'Routing'
  const exercises5 = 3
  const part6='Middlewares'
  const exercises6=7

  return (
    <div>
      <h1>{main}</h1>
      <h2>{course}</h2>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>
        {part4} {exercises4}
      </p>
      <p><h2>Total of {exercises1 + exercises2 + exercises3 + exercises4} exercises</h2></p>
      <h2>{course1}</h2>
      <p>
        {part5} {exercises5}
      </p>
      <p>
        {part6} {exercises6}
      </p>
      <p>
        <h2>Total Of {exercises5+exercises6} exercises</h2>
      </p>
    </div>
  )
}

const App =()=>{
  return (
    <div>
      <Course/>
    </div>
  )
}

export default App;
