import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Sai',
    number: 7032172001
  },
  {
    id: 2,
    name: 'Rama',
    number: 9100226132
  },
  {
    id: 3,
    name: 'Krishna',
    number: 9290552800
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
