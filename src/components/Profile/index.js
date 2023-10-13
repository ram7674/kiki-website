import React, { useState } from 'react';
import Header from '../Header';
import PersonProfile from '../PersonProfile';
import './index.css';

const listData = [
  {
    id: 1,
    name: 'John Smith',
    image: '/images/image1.jpg',
    rating: 4.8,
    specialities: 'Fade, Beard Trim',
    availability: 'Monday to Friday (9:00 AM - 6:00 PM)',
    contact: 'john@examplebarber.com',
    location: 'Downtown Barbershop',
    bio:
      'John has over 10 years of experience in barbering and is known for his precision fades and beard grooming. He is passionate about helping clients achieve their desired look.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    image: '/images/image2.jpg',
    rating: 4.9,
    specialities: 'Fade, Beard Trim',
    availability: 'Tuesday to Saturday (10:00 AM - 7:00 PM)',
    contact: 'sarah@examplebarber.com',
    location: 'Sarahs Salon',
    bio:
      'Sarah is a creative stylist with a knack for hair coloring. She loves experimenting with new styles and colors to help her clients feel their best.',
  },
  {
    id: 3,
    name: 'David Brown',
    image: '/images/image3.jpg',
    rating: 4.7,
    specialities: 'Straight Razor Shave, Buzz Cut',
    availability: 'Monday to Sunday (8:00 AM - 8:00 PM)',
    contact: 'david@examplebarber.com',
    location: 'Classic Cuts',
    bio: 'David is a master of classic barbering techniques. He takes pride in his precise straight razor shaves and timeless buzz cuts.',
},
{
    id: 4,
    name: "Emily White",
    image: '/images/image4.jpg',
    rating: 4.9,
    specialities: "Women's Haircuts, Balayage",
    availability: "Tuesday to Saturday (10:00 AM - 7:00 PM)",
    contact: "emily@examplebarber.com",
    location: "Modern Styles",
    bio: "Emily specializes in creating trendy and elegant hairstyles for women. Her balayage techniques are highly sought after by clients.",
},
{
    id: 5,
    name: "Jessica Turner",
    image: '/images/image5.jpg',
    rating: 4.8,
    specialities: "Updos, Highlights",
    availability: "Monday to Friday (10:00 AM - 6:00 PM)",
    contact: "jessica@examplebarber.com",
    location: "The Shear Studio",
    bio: "Jessica has a flair for creating stunning updos and is known for her skillful highlighting techniques that add dimension to her clients' hair.",
},
{
    id: 6,
    name: "Kevin Clark",
    image: '/images/image6.jpg',
    rating: 4.7,
    specialities: " Pompadour, Crew Cut",
    availability: "Wednesday to Sunday (8:00 AM - 7:00 PM)",
    contact: "kevin@examplebarber.com",
    location: "Classic Cuts",
    bio: "Kevin specializes in classic men's styles, including the timeless pompadour and crew cut. He's a perfectionist when it comes to haircuts.",
},
{
    id: 7,
    name: 'John Smith',
    image: '/images/image7.jpg',
    rating: 4.8,
    specialities: 'Fade, Beard Trim',
    availability:' Monday to Friday (9:00 AM - 6:00 PM)',
    contact: 'john@examplebarber.com',
    location: 'Downtown Barbershop',
    bio: 'john has over 10 years of experience in barbering and is known for his precision fades and beard grooming. Hes passionate about helping clients achieve their desired look.',
},
{
    id: 8,
    name: 'Sarah Johnson',
    image: '/images/image8.jpg',
    rating: 4.9,
    specialities: 'Fade, Beard Trim',
    availability: 'Tuesday to Saturday (10:00 AM - 7:00 PM)',
    contact: 'sarah@examplebarber.com',
    location: 'Sarahs Salon',
    bio: 'Sarah is a creative stylist with a knack for hair coloring. She loves experimenting with new styles and colors to help her clients feel their best.',
}, 
];

const Profile = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const onHandleData = (profile) => {
    setSelectedProfile(profile);
    setIsToggle(true);
  };

  return (
    <>
      <Header />
      {isToggle ? null : (
        <div className='profile-container'>        
          <h1 className='profile-title'>Pick Your Preferred Hair Artist</h1>
          <div className='profile-card'>
            {listData.map((item) => (
              <div className='card1' key={item.id}>
                <img src={item.image} alt='barber-img' className='barber-img' />
                <button
                  className='pro-button'
                  onClick={() => onHandleData(item)}
                >
                  Book Appointment
                </button>
            </div>
              ))}
            </div>
        </div>
      )}
      {isToggle && <PersonProfile profile={selectedProfile} />}
    </>
  );
};

export default Profile;