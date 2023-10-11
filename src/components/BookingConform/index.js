import React from 'react'
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './index.css'

const BookingConform = () => {
  return (
    <>
     {/* below the code block large devices */}
     <div className='booking-conform-container'>
        <div className='booking-conform-card'>
            <div className='booking-card'>
                <BsFillHandThumbsUpFill style={{ height:'50px', width: '500px', color: '#fff' }}/>
            </div>
            <h1 className='great'>Great!</h1>
            <p className='status'>Your Appointment is conform</p>
            <Link to='/home' className='go-back'><p >Go To Home Page <BsArrowRight /></p></Link>
        </div>
      </div>

      {/* below the code block small devices */}
      <div className='booking-conform-card-small'>
        <BsFillHandThumbsUpFill style={{ height:'70px', width: '70px', color: '#29a860' }}/>
        <h1 className='great'>Great!</h1>
        <p className='status'>Your Appointment is conform</p>
        <Link to='/home' className='go-back'><p >Go To Home Page <BsArrowRight /></p></Link>
      </div>
    </>
    

  )
}

export default BookingConform