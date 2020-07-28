const express = require("express")
const server = express()
require('dotenv').config();
const port = process.env.PORT || 5000

const getTodos = require("./handlers/get-todos.js")
const postUser = require("./handlers/post-user.js")


server.use(express.json());

server.get("/todos", getTodos)
server.post("/user", postUser)

server.use(function (err, req, res, next) {
    console.log("next called")
    console.error(err.stack)
    res.status(500).send(err.stack)
  })

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})