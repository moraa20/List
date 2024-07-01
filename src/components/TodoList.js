import React, { useReducer } from 'react';
import { todoReducer, TodoContext } from './todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, []);

    const handleAddTodo = () => {
        dispatch({ type: 'ADD_TODO', payload: 'New Todo' });
    };

    const handleRemoveTodo = (index) => {
        dispatch({ type: 'REMOVE_TODO', payload: index });
    };

    return (
        <div className="todo-list-conainer">
            <h2>Todo List</h2>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {state.map((todo, index) => (
                    <li key={index}>
                        <span className="todo-text">{todo}</span>
                        <button onClick={() => handleRemoveTodo(index)} className="todo-remove-button">Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
