# Therapy Box API docs

There are three sets of routes, for authentication, todos and photos

## Authentication

|verb|endpoint|body|returns|
|-----|-------|----|-------|
|post|"/login"|JSON containing username and password|JSON with token key|
| post | "/signup" | JSON containing username, password and email | JSON with a token key |

tokens returned contain, when decoded, exp, iam, user_id and username.

## TODOs

All calls to the "/todo" endpoint require a valid JWT provided with the bearer syntax. A user only has access to their own TODOs.

|verb|endpoint|purpose|body|returns|
|----|--------|-------|----|-------|
|get|"/todos"|get todos of user|none|JSON array| 
|post|"/todos"|Add a todo |JSON containing, at least, a todo field like `"todo":"write API docs"`. You can also mark the todo as completed while you create it with `"completed": true`. | 200, no body |
|put|"/todos"| Edit a todo |JSON like `{"id": 5, "todo": "take a break", completed: false}`|200, no body |

## Photos

All calls to the "/images" endpoint require a valid JWT provided with the bearer syntax. A user only has access to their own photos.

|verb|endpoint|purpose|body|returns|
|-|-|-|-|-|
|get|"/photo"|gets urls for photos submitted by user|none|array of objects with id and url|
|post|"/photo"|submits a photo|form data with a file keyed to the word `file`|JSON object with a url key