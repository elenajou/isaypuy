import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/landing.jsx';
import Countdown from './components/Countdown/countdown.jsx';
import Invitation from './components/Invitation/invitation.jsx';
import Retratos from './components/Retratos/retratos.jsx';
import MoreInfo from './components/MoreInfo/moreinfo.jsx';
import Schedule from './components/Schedule/schedule.jsx';
import GuestList from './components/GuestList/guestlist.jsx';
import Mail from './components/Mail/mail.jsx';
import './App.css'

function Open() {
  return (
    <div className="open" id="open">
      <Mail/>
    </div>
  );
}

function Home() {
  return (
    <div className="home" id="home">
      <Landing/>
      <Countdown/>
      <Schedule/>
      <Invitation/>
      <Retratos/>
      <MoreInfo/>
    </div>
  );
}

function App() {
  const [showMail, setShowMail] = useState(true);
  const [showHome, setShowHome] = useState(false);

  const handleMailClick = () => {
    setShowMail(false); // Fade out Mail
    setTimeout(() => {
      setShowHome(true); // Fade in Home after Mail fades out
    }, 1000); // Match this duration with your fade-out duration
  };


  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={
            <div>
              <div className={`fade-in ${showHome ? 'visible' : ''}`}>
                <Home/>
              </div>
              <div className={`fade-out ${showMail ? '' : 'hidden'}`}>
                <Mail onClick={handleMailClick} />
              </div>
            </div>
        }/>
        <Route 
          path='/home' 
          element={
            <div className={`fade-in ${showHome ? 'visible' : ''}`}>
            <Home/>
            </div>
          }/>
        <Route path='/guestlist' element={<GuestList/>}></Route>
      </Routes>
    </Router>
  )
}
export default App
