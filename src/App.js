import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import PersonProfile from './components/PersonProfile'
import BookPage from './components/BookPage'
import BookingConform from './components/BookingConform'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/personprofile" element={<PersonProfile />} />
          <Route path="/bookpage" element={<BookPage />} />
          <Route path="/bookingconform" element={<BookingConform />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
