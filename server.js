const express = require("express")
const server = express()
require('dotenv').config();
const port = process.env.PORT || 5000

const fileUpload = require('express-fileupload')
const verifyJWT = require("./middleware/verifyJWT.js")


const signup = require("./handlers/auth/signup.js")
const login = require("./handlers/auth/login.js")
const getTodos = require("./handlers/todos/get-todos.js")
const postTodos = require("./handlers/todos/post-todos.js")
const putTodos = require("./handlers/todos/put-todos.js")
const postPhoto = require("./handlers/photos/post-photo.js")
const getPhotos = require("./handlers/photos/get-photo")

server.use(express.json());
server.post("/signup", signup)
server.post("/login", login)

server.use(verifyJWT)
server.get("/todos", getTodos)
server.post("/todos", postTodos)
server.put("/todos", putTodos)

server.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
server.get("/photo/", getPhotos)
server.post("/photo", postPhoto)

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})