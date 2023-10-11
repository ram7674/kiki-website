import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const PersonProfile = ({ profile }) => {
  if (!profile) {
    return null;
  }

  return (
    <div className='profile-container'>
      <div className='person-img'>
        <img src={profile.image} alt='profile' className='person-profile-img' />
      </div>
      <div className='person-details'>
        <p className='name'>{profile.name}</p>
        <p className='contact'>
          <span className='side-heading'>Contact:</span> {profile.contact}
        </p>
        <p className='contact'>
          <span className='side-heading'>Specialities:</span> {profile.specialities}
        </p>
        <p className='contact'>
          <span className='side-heading'>Availability:</span> {profile.availability}
        </p>
        <p className='contact'>
          <span className='side-heading'>Location:</span> {profile.location}
        </p>
        <p className='contact'>
          <span className='side-heading'>Rating:</span> {profile.rating}
        </p>
        <p className='contact'>{profile.bio}</p>
        <Link to='/bookpage'>
          <button className='button'>Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default PersonProfile;
