import React from 'react';

const NotFoundpage = () => {
  return (
    <div>
      <hr />
      <div className='container py-0 h-100'>
        <div className=' row d-flex justify-content-center align-items-center h-100'>
          <div className='col-md-9 col-lg-7 col-xl-6'>
            <div className='card mb-4 text-dark'>
              <div className='text-center card-body p-4'>
                <div className='mb-4 pb-3'>
                  <img src='notfound.png' height='200' width='200' alt='' />
                  <p className='pt-5 '>There are No Todo items📜.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundpage;
