import React, { useState } from 'react';
import './AddTodo.css';

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
    <div className='container py-0  '>
      <div className=' row d-flex justify-content-center align-items-center h-100'>
        <div className=' column col-md-9 col-lg-7 col-xl-6 '>
          <div className='card pt-3 mb-2 text-light gradient-custom'>
            <div className='card-body p-0'>
              <div className='mb-0 pb-0'>
                <form onSubmit={submit} className='container'>
                  <div className='d-flex'>
                    <h3 className=' px-1 '>Add Todo</h3>
                    <p className=' pt-1'> ✏️</p>
                  </div>
                  <hr />
                  <div className=' my-4'>
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
                  <div className='mb-0'>
                    <label
                      htmlFor='Text your todo title'
                      className='form-label'
                    >
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
                    <button
                      className='btn btn-success my-3 butn-sm'
                      type='submit'
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AddTodo;
