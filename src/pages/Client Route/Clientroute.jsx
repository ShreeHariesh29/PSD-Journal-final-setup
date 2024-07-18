import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../Homepage'
import Nav from '../../components/nav bar components/Nav'
import Footer from '../../components/footer components/Footer'
import Research from '../Research'
import AboutUs from '../AboutUs'
import UserDetails from '../UserDetails'
import Jornals from '../Jornals'
import AddJournals from '../AddJournals'

function Clientroute() {
  return (
    <div>
        <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/journals" element={<Jornals />}>
          <Route path="/journals/addjournal" element={<AddJournals />} />
        </Route>
        <Route path="/research" element={<Research />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Clientroute