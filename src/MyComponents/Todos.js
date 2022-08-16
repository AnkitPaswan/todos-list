import React from 'react';
import TodoItems from './TodoItems';
import NotFoundpage from './NotFoundpage';
const todos = (props) => {
  return (
    <div className='container '>
      <div className=' row d-flex justify-content-center align-items-center'>
        <div className=' col-xl-6'>
          <h3 className='mx-3 my-1'>Todos List⤵️</h3>
        </div>
      </div>
      {props.todos.length === 0 ? (
        <NotFoundpage />
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};

export default todos;
