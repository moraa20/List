import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import ClickCounter from './components/ClickCounter';
import FactorialCalculator from './components/FactorialCalculator';
import './styles.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>React Hooks Learning</h1>
        <TodoList />
        <ClickCounter />
        <FactorialCalculator />
      </header>
    </div>
  );
}

export default App;
