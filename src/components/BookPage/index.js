import React from 'react'
import Header from '../Header'
import './index.css'
import { Link } from 'react-router-dom'

const BookPage = () => {
  return (
    <>
        <Header />
        <div className='bookpage-container'>
            <div className='bookpage-container-card'>
                <h1 className='tittle'>Book Your Appointment</h1>
                <div className='booking-cards'>
                    <div className='card-item'>
                        <label className='title-name'>Name</label>
                        <input type='text' placeholder='Enter Your FirstName' className='input-element' />
                        <label className='name-title'>First Name</label>
                    </div>
                    <div className='card-item'> 
                        <input type='text' placeholder='Enter Your LastName' className='input-element last-name' />
                        <label className='name-title'>Last Name</label>
                    </div>
                </div>
                <hr className='hr-line' />
                <div className='booking-cards'>
                    <div className='card-item'>
                        <label className='title-name'>Email</label>
                        <input type='text' placeholder='Enter Your name' className='input-element' />
                        <label className='name-title'>example@gmail.com</label>
                    </div>
                    <div className='card-item'> 
                        <label className='title-name'>Phone Number</label>
                        <input type='phone' placeholder='+91 00000-00000' className='input-element' />
                        <label className='name-title'>Please enter a valid phone number</label>
                    </div>
                </div>
                <hr className='hr-line' />
                <div className='select-container'>
                    <h1 className='servece-title'>Select Your Services</h1>
                    <div className='select-serveces'> 
                        <div className='select-services-card'>
                            <div className='check-box-card'>
                                <input type='checkbox' id='checkbox1' className='check-box' />
                                <label className='service-type' for='checkbox1'>Beard Trim</label>
                            </div>
                            <div className='check-box-card'>
                                <input type='checkbox' id='checkbox2' className='check-box' />
                                <label className='service-type' for='checkbox2'>Cut & Style</label>
                            </div>
                            <div className='check-box-card'>
                                <input type='checkbox' id='checkbox3' className='check-box' />
                                <label className='service-type' for='checkbox3'>Washing</label>
                            </div>
                            <div className='check-box-card'>
                                <input type='checkbox' id='checkbox4' className='check-box' />
                                <label className='service-type' for='checkbox4'>Waxing</label>
                            </div>
                        </div>
                        <div className='select-services-card'>
                            <div className='check-box-card'>
                                <input type='checkbox' id='checkbox5' className='check-box' />
                                <label className='service-type' for='checkbox5'>Shaves</label>
                            </div>
                            <div className='check-box-card'>
                                <input type='checkbox' id='checkbox' className='check-box' />
                                <label className='service-type' for='checkbox'>Hair Coloring</label>
                            </div>
                            <div className='check-box-card'>
                                <input type='checkbox' id='checkbox6' className='check-box' />
                                <label className='service-type' for='checkbox6'>Facial Grooming</label>
                            </div>
                            <div className='check-box-card'>
                                <input type='checkbox' id='checkbox7' className='check-box' />
                                <label className='service-type' for='checkbox7'>Hot Towel Treatments</label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='hr-line' />
                <div className='date-container'>
                    <h1 className='servece-title'>Select Date</h1>
                    <input type='date' className='data-styl' />
                </div>
                <div className='btn-container'>
                    <Link to='/bookingconform'><button className='bookpage-button'>Book Now</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookPage

