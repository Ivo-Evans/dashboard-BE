# Therapy Box API docs

These docs contain documentation for the API routes. All routes other than "/login" and "/signup" require a valid JWT provided with the bearer syntax, and grant the caller access to the details of the user specified in the JWT. 

## Authentication

|verb|endpoint|body|returns|
|-----|-------|----|-------|
|post|"/login"|JSON containing username and password|JSON with token key|
| post | "/signup" | JSON containing username, password and email | JSON with a token key |

tokens returned contain, when decoded, exp, iam, user_id and username.

## TODOs

|verb|endpoint|purpose|body|returns|
|----|--------|-------|----|-------|
|get|"/todos"|get todos of user|none|JSON array| 
|post|"/todos"|Add a todo |empty or JSON containing `{"todo": "mytodo", completed: true}`. `completed: false` is a default value | 200, no body |
|put|"/todos"| Edit a todo |JSON like `{"id": 5, "todo": "take a break", completed: false}`|200, no body |

## Photos


|verb|endpoint|purpose|body|returns|
|-|-|-|-|-|
|get|"/photo"|gets urls for photos submitted by user|none|array of objects with id and url|
|post|"/photo"|submits a photo|form data with a file keyed to the word `file`|JSON object with a url key

## Warmers

|verb|endpoint|purpose|body|returns|
|----|--------|-------|----|-------|
|get|"/warmer"| Gets a count of the user's warmers| none| JSON like `{"jumper": 10, "cardigan": 4}`|