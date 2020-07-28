const express = require("express")
const server = express()
require('dotenv').config();
const port = process.env.PORT || 5000

const verifyJWT = require("./middleware/verifyJWT.js")
const signup = require("./handlers/auth/signup.js")
const login = require("./handlers/auth/login.js")
const getTodos = require("./handlers/todos/get-todos.js")
const postTodos = require("./handlers/todos/post-todos.js")
const putTodos = require("./handlers/todos/put-todos.js")

server.use(express.json());
server.post("/signup", signup)
server.post("/login", login)

server.use(verifyJWT)
server.get("/todos", getTodos)
server.post("/todos", postTodos)
server.put("/todos", putTodos)

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})