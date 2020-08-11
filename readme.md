# Dashboard Box API docs

These docs contain documentation for the API routes. A colon in a route indicates a variable - you can drop in different values to get diffferent results.

## Teams

|verb|endpoint|purpose|body|returns|
|----|--------|-------|----|-------|
|GET|"/teams"|List available team names| None | JSON array of strings |
|GET| "/teams/:team"|Find games won by a specific team by name|none|JSON array of objects|

## News

|verb|endpoint|purpose|body|returns|
|----|--------|-------|----|-------|
|GET|/article/:url| get html for article at a given url | none | html |

## Authentication

|verb|endpoint|body|returns|
|-----|-------|----|-------|
|post|"/login"|JSON containing username and password|JSON with token key|
| post | "/signup" | JSON containing username, password and email | JSON with a token key |

tokens returned contain, when decoded, exp, iam, user_id and username.

All routes below this in the documentation require a valid JWT provided with the bearer syntax, and grant the caller access to the details of the user specified in the JWT. 

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