import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {

    return (
        <div className='task-list'>
            {props.state.map(task => (
                <Todo 
                task={task.item}
                id={task.id}
                completed={task.completed}
                toggle={props.toggle}
                key={task.id}
            />
            ))}
            {console.log("From Todo", props.state)}
        </div>
    )
};

export default TodoList;                 
