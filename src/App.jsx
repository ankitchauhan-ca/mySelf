// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Service from './pages/Service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio';
import About from './pages/AboutUs';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/about' element={<About />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;