import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Blog from './components/pages/Blog';
import SignUp from './components/pages/SignUp';
import ProductPage from './components/pages/ProductPage';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;