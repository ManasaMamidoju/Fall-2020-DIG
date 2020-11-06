import React from 'react';
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <div>
      <div className='log-in-container'>
        <div className='log-in-form'>
          <div className='form-group mb-2'>
            <h3 className='mb-2 text-center font-weight-bold'>Log in</h3>
            <input
              type='email'
              className='form-control mb-2'
              placeholder='Email'
            />
            <input
              type='password'
              className='form-control mb-2'
              placeholder='Password'
            />
            <button type='button' className='btn btn-secondary mt-3 mb-2 btn-block'>
              Log In
            </button>
            <div className="text-center">
              Need an account? <Link to='/sign-up'>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
