import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import { createContext } from 'react';

export const counttracker = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <counttracker.Provider value={{ counter: count, dispatcher: dispatch }}>
      <ComponentA />
    </counttracker.Provider>
  );
}

export default App;
