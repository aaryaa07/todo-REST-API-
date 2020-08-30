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
- type of request: post
- body: _id:Number, todo: String
- creates a new todo item and saves to database

### - /delete
- type of request: post
- body: _id:Number
- finds item by id and then deletes that item from database(list).


### - /update
- type of request: patch
- body: _id:Number, todo: String
- searches for the todo item based on id and updates it with the new todo item string.

### - /list
- type of request: get
- lists all items present in the todo list



