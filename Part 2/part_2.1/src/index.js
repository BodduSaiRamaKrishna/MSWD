import ReactDOM from 'react-dom'
import App from './App.js'

const notes = [
  {
    id: 1,
    content: 'Fudamentals Of React',
    important: true
  },
  {
    id: 2,
    content: 'Using Props To Pass Data',
    important: false
  },
  {
    id: 3,
    content: 'State Of A Component',
    important: true
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
