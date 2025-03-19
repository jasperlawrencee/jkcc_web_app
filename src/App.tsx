import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Orders } from './pages/Orders';
import { Cooking } from './pages/Cooking';
import { Signup } from './pages/Signup';
import { Footer } from './components/Footer';
import About from './pages/About';
import React from 'react';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <div className="overflow-hidden w-full bg-white text-zinc-800">
        <Topbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to={"/"} />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Signup/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/about' element={<About/> }/>
            <Route path='/under-construction' element={<Cooking/>} />
            <Route path='/admin' element={<Admin/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}