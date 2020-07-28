const express = require("express")
const server = express()
require('dotenv').config();
const port = process.env.PORT || 5000

const getTodos = require("./handlers/get-todos.js")
const signup = require("./handlers/signup.js")
const login = require("./handlers/login.js")

server.use(express.json());

server.get("/todos", getTodos)
server.post("/signup", signup)
server.post("/login", login)


server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})