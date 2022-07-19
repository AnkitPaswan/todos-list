import React from 'react';
import TodoItems from './TodoItems';
const todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0
        ? 'No Todos to display'
        : props.todos.map((todo) => {
            return (
              <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

export default todos;