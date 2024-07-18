import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/nav bar components/Nav';
import Footer from './components/footer components/Footer';
import Jornals from './pages/Jornals';
import AboutUs from './pages/AboutUs';
import Research from './pages/Research';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import AddJournals from './pages/AddJournals';
import AdminHome from './components/Home component/AdminHome';
import Adminlogin from './pages/Admin pages/Adminlogin';
import { IoJournal } from 'react-icons/io5';
function App() {
  const location = useLocation();

  // Function to determine whether to render Nav and Footer
  const shouldRenderNavAndFooter = () => {
    // Exclude AdminLogin route from rendering Nav and Footer
    return !location.pathname.includes('/adminlogin' );
  };

  return (
    <div className="App">
      {/* Conditionally render Nav based on route */}
      
      {shouldRenderNavAndFooter() && <Nav />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/journals" element={<Jornals />}>
          <Route path="/journals/addjournal" element={<AddJournals />} />
        </Route>
        <Route path="/research" element={<Research />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
      {/* Conditionally render Footer based on route */}
      {shouldRenderNavAndFooter() && <Footer />}
    </div>
  );
}

export default App;
