const express = require("express")
const server = express()
require('dotenv').config();
const port = process.env.PORT || 5000

const getTodos = require("./handlers/get-todos.js")
const signup = require("./handlers/signup.js")


server.use(express.json());

server.get("/todos", getTodos)
server.post("/user", signup)

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})