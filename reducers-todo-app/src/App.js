import React, { useReducer } from 'react';

import { todoReducer, initialState } from './reducers/todoReducer';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);
 
 /*toggleItem = id => {
    const newTaskList = initialState.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      } else {
        return task;
      }
    });

    this.setState({
      taskList: newTaskList
    });
  };

  addTask = todoTask => {
    const newTask = {
      task: todoTask,
      id: Date.now(),
      completed: false
    };

  this.setState({
    taskList: [...this.state.taskList, newTask]
    });
  };

  handleChanges = e => {
    this.setState({
      todoTask: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addTask(this.state.todoTask);
    e.target.reset();
  }

  handleClear = e => {
    e.preventDefault();
    let newList = this.state.taskList.filter(task => !task.completed);
    this.setState({ taskList: newList })
  }*/

  
    return (
      <div className='App'>
        
        <h2>Welcome to your Todo App!</h2>
          <TodoList 
            tasks={state}
          />
      </div>
    );
}

export default App;
