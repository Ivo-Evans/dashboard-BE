# Therapy Box API docs

There are three sets of routes, for authentication, todos and photos

## Authentication

|verb|endpoint|body|returns|
|-|-|-|-|-|
|post|"/login"|JSON containing username and password|200 and JWT|
| post | "/signup" | JSON containing username, password and email | 200 and JWT |

## TODOs

All calls to the "/todo" endpoint require a valid JWT provided with the bearer syntax. A user only has access to their own TODOs.

|verb|endpoint|purpose|body|returns|
|-|-|-|-|-|-|
|get|"/todos"|get todos of user|none|JSON array| 
|post|"/todos"|Add a todo |JSON containing, at least, a todo field like `"todo":"write API docs"`. You can also mark the todo as completed while you create it with `"completed": true`. | 200, no body |
|put|"/todos"| Edit a todo |JSON like `{"id": 5, "todo": "take a break", completed: false}`|200, no body |