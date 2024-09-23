import React from 'react';
import logo from './logo.svg';
import './App.css';
// import MyComponent from './components/MyComponent'; 
import Todo from './components/Todo';
import TodoState from './components/TodoState'
import Counter from './components/Counter';
import CounterState from './components/CounterState'
import CounterHook from './components/CounterHook';

import Fetch from './components/Fetch'
import Message from './components/Message';


function App() {
  return (
    <React.StrictMode>
          {/* <Todo firstName="Mike" lastName="Denton" /> */}
          {/* <TodoState /> */}
          {/* <Counter /> */}
          {/* <CounterState /> */}
          <br />
          {/* <CounterHook /> */}

          <Message />
    </React.StrictMode>
  );
}

export default App;
