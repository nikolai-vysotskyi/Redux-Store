#Instructions

You needed to install the next npm plugins:
- redux
- react-redux
- redux-thunk

Add Store folder to Components folder in your react project.

###Example:
Like example of store we create file that named "config.js", where:
- initialState — listing of all the variables and their default values
- config with action type "config" — a function to overwrite our values in initialState

We added import and export config.js to structure.js

######At this point, we have created a new state storage.

To change a variable in our new "config" storage, we create onConfig.js in functions folder.

There are onConfig function that take current state of the store, changes the variable you need in it and dispatch changed state to config store.

#### How to use it in code:
In render index.jsx we have to wrap the entire environment where our store will be used in StoreProvider.

We use useSelector for make subscribe to our "config" store.
Every time dispatch for this store will be processed, useSelector will give us new data
By writing a useSelector to a constant, we can always have up-to-date data.

And, if we need to overwrite data, we connect the onConfig function by passing the variable name and its new value to it.
