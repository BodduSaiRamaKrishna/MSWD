const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")

app.use(bodyParser.json())

morgan.token("body", function(req, res) {
	console.log(res)
	
	return JSON.stringify(res.req.body)
})


app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))



let notes = [
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
]


app.get("/api/notes", (req, res) => {
	res.json(notes)
})


const generateID = () => {
	const Gid = Math.floor(Math.random() * 1000)
	
	return Gid
}
	
app.post("/api/notes", (req, res) => {
	const body = req.body
	
	
	if (!body.name || !body.number) {
		console.log("No content")
		return res.status(400).json({
			error: "Content Missing"
		})
	}
	
	let note = notes.find(note => note.name === body.name)
	
	if (note) {
		return res.status(400).json({
			error: "Name must be unique"
		})
	}
	const noteObject = {
		name: body.name,
		number: body.number,
		id: generateID()
	}
	
	notes = notes.concat(noteObject)
	
	res.json(noteObject)
})
	

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
