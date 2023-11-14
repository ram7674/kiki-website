import React, { useState } from 'react';
import { BiUser, BiLock } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    username: '',
    password: '',
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset error message when user starts typing
    setErrorMessages({
      ...errorMessages,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username and password
    const { username, password } = formData;
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    if (usernameError || passwordError) {
      setErrorMessages({
        username: usernameError,
        password: passwordError,
      });
    } else {
      // Perform login logic
      // For now, let's just navigate to another page
      navigate('/home');
    }
  };

  const validateUsername = (username) => {
    if (username.length < 5) {
      return 'Username must be 5 characters';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return '';
  };

  const navigate = useNavigate();

  return (
    <div className='login-bg'>
      <form className='login-container' onSubmit={handleSubmit}>
        <h1 className='login-title'>LOGIN</h1>
        <div className='user-card'>
          <span className='error-msg'>{errorMessages.username}</span>
          <div className='user-name'>
            <BiUser className='icons' />
            <input
              type='text'
              className='login-type'
              placeholder='Username'
              name='username'
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className='user-card buttom'>
          <span className='error-msg'>{errorMessages.password}</span>
          <div className='user-name'>
            <BiLock className='icons' />
            <input
              type='password'
              className='login-type'
              name='password'
              placeholder='Password'
              onChange={onInputChange}
            />
          </div>
        </div>
        <button type='submit' className='buttons'>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Login;
