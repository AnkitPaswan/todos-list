import React, { useState } from 'react';


const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Please enter a title or description');
    } else {
      addTodo(title, desc);
      setTitle('');
      setDesc('');
    }
  };
  return (
    <>
      <form onSubmit={submit} className='container'>
        <h3>Add Todo</h3>
        <div className=' my-3'>
          <label htmlFor='title' className='form-label'>
            Todo Title
          </label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder='Type Todo title..'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='Text your todo title' className='form-label'>
            Todo Description
          </label>
          <textarea
            className='form-control'
            id='desc'
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder='Type Todo description..'
            rows='3'
          ></textarea>
          <button className='btn btn-success my-3 butn-sm' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
