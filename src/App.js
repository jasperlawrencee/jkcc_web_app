import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Orders } from './pages/Orders';
import { Cooking } from './pages/Cooking';
import { Footer } from './components/Footer';
// import { Sidenav } from './components/Sidenav';


export default function App() {
  // const [showNav, setShowNav] = useState(false);

  return (
    <Router>
      <div className="App overflow-hidden">
        <Topbar />
        {/* <div>{showNav ? (<Sidenav onClose={() => setShowNav(false)}/>) : <Topbar onMenuClicked={() => setShowNav(true)}/>}</div> */}
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/under-construction' element={<Cooking />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}