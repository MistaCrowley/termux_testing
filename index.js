const express = require('express')
const app = express()
const port = 3010

app.get('/', (req, res) => {
	res.send("hey kid, I'm a phone, stop all the tiktokin")
})

app.listen(port, () => {
	console.log(`serving on port ${3010}`)
})