import React from 'react';

const Todo = props => {
    
      
    return (
        <div id={props.id} 
            className={`task${props.completed ? ' completed ' : ''}`}
            onClick={() => props.toggle(props.id)}
        >
            <p>{props.task}</p>
        </div>
    )
    
};

export default Todo;