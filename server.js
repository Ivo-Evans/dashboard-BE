const express = require("express")
const server = express()
require('dotenv').config();
const port = process.env.PORT || 5000

const getTodos = require("./handlers/get-todos.js")

server.get("/todos", getTodos)

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})