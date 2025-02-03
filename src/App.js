import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Orders } from './pages/Orders';
import { Cooking } from './pages/Cooking';
import { Signup } from './pages/Signup';
import { Footer } from './components/Footer';
import About from './pages/About';


export default function App() {

  return (
    <Router>
      {/* Added Margin On Top for Topbar size */}
      <div className="overflow-hidden w-full bg-white text-zinc-800">
        <Topbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Signup />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/under-construction' element={<Cooking />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}