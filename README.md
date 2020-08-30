# todo-REST-API-

## start server
- open terminal/cmd and navigate to the project folder.
- run command `nodemon app.js`
- if the o/p says server ready, you have successfully started the server.

## start mongo server
- open another terminal window
- run command `mongo`
- this will start the mongoDB server locally.


## routes
### - /create
- type of request: **POST**
- body: _id:Number, todo: String
- creates a new todo item and saves to database

### - /delete
- type of request: **POST**
- body: _id:Number
- finds item by id and then deletes that item from database(list).
- if no todo exists with given id, list remains unchanged.


### - /update
- type of request: **PATCH**
- body: _id:Number, todo: String
- searches for the todo item based on id and updates it with the new todo item string.
- if no todo exists with the given id, list remains unchanged.

### - /list
- type of request: **GET**
- lists all items present in the todo list



