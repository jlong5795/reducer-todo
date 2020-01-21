import React from 'react';
import Todo from './Todo';

const TodoList = props => {
   console.log('TodoList', props.tasks);
    return (
        <div className='task-list'>
            {props.tasks.map(task => (
                 <Todo 
                    task={task.item}
                    id={task.id}
                    
                />
               
            ))}
        </div>
    )
};

export default TodoList;