import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';
import TodoList from './TodoList';

const TodoForm = () =>  {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTask, setNewTask] = useState('');

    const handleChanges = e => {
        setNewTask(e.target.value);
    }
    
    const onSubmit = e => {
        e.preventDefault()
        dispatch({type: 'ADD_TODO', payload: newTask})
    }
    
   return (
    <div>
        <form onSubmit={onSubmit}>
            <input 
                type='text'
                name='task'
                value={newTask}
                onChange={handleChanges}
            />
            <button >Add Task</button>
        </form>
        <button>Clear Completed</button>
        <TodoList state={state}/>
    </div>
    )
};

export default TodoForm;