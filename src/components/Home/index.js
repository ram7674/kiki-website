import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className='home-bg-container'>
        <div className='card-1'>
          <h1 className='home-title'>Style Your Hair and <br/>Style Your Life</h1>
          <Link to='/profile'><button className='home-btn'>Profile page</button></Link>
        </div>
        <div className='home-page-image'>
          <img src='/images/image2.jpg' alt='home-pic' className='home-images' />
        </div>
        <Link to='/profile' className='text'><button className='home-page-btn'>Profile page</button></Link>
    </div>
    </>
  )
}

export default Home
