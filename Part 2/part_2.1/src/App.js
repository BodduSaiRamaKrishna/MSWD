import React from 'react'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Half Stack Application Development</h1>
        {notes[0].content}<br/>
        {notes[1].content}<br/>
        {notes[2].content}
    </div>
  )
}

export default App
