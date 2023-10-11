import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Login = () => {
  return (
    <div className='login-bg'>
        <div className='login-container'> 
            <h1 className='login-title'>Login</h1>
            <div className='login-card'> 
                <label className='login-details'>USERNAME</label>
                <input type='text' className='login-type' placeholder='USER NAME' />
            </div>
            <div className='login-card'>
                <label className='login-details'>PASSWORD</label>
                <input type='password' className='login-type' placeholder='PASSWORD' />
            </div>
            <Link to='/home'><button className='button'>SUBMIT</button></Link>
        </div>
    </div>
  )
}

export default Login
