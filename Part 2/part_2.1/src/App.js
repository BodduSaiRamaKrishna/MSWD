import React from 'react'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Half Stack Application Development</h1>
        {notes[0].content}:{course.parts[0].exercises}<br/>
        {notes[1].content}:{course.parts[1].exercises}<br/>
        {notes[2].content}:{course.parts[2].exercises}
    </div>
  )
}

export default App
