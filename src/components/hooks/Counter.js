import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Counter;

/*
https://reactjs.org/docs/hooks-overview.html
State Hook

Here, useState is a Hook (we’ll talk about what this means in a moment). 
We call it inside a function component to add some local state to it. 
React will preserve this state between re-renders. 
useState returns a pair: the current state value 
and a function that lets you update it. 
You can call this function from an event handler or somewhere else. 
It’s similar to this.setState in a class, except it doesn’t 
merge the old and new state together. (We’ll show an example 
    comparing useState to this.state in Using the State Hook.)

The only argument to useState is the initial state. 
In the example above, it is 0 because our counter starts from zero. 
Note that unlike this.state, the state here doesn’t have 
to be an object — although it can be if you want. 
The initial state argument is only used during the first render.

Declaring multiple state variables
You can use the State Hook more than once in a single component:

function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}

*/