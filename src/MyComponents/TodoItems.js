import React from 'react';

const TodoItems = ({ todo, onDelete }) => {
  return (
    <div className='container py-2 h-100'>
      <div className=' row d-flex justify-content-center align-items-center h-100'>
        <div className='col-md-9 col-lg-7 col-xl-6'>
          <div className='card mb-4 text-light gradient-custom'>
            <div className='card-body p-4'>
              <div className='mb-4 pb-3'>
                <h4>{todo.title}</h4>
                <hr />
                <p>{todo.desc}</p>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <button
              className='btn btn-sm btn-danger'
              onClick={() => {
                onDelete(todo);
              }}
            >
              Delete
            </button>
            <button
              className='btn btn-sm btn-success'
              onClick={() => {
                onDelete(todo);
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
        <hr />
    </div>
  );
};

export default TodoItems;
