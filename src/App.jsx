import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/landing.jsx';
import Countdown from './components/Countdown/countdown.jsx';
import Retratos from './components/Retratos/retratos.jsx';
import MoreInfo from './components/MoreInfo/moreinfo.jsx';
import Invitation from './components/Invitation/schedule.jsx';
import GuestList from './components/GuestList/guestlist.jsx';
import Mail from './components/Mail/mail.jsx';
import FadeInSection from './components/FadeInSection/fadeInSection.jsx';
import './App.css'

function Home() {
  return (
    <div className="home" id="home">
      <Landing/>
      <Countdown/>
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
    setTimeout(() => {
      setShowMail(false); // Fade out Mail
    }, 1000);
    setTimeout(() => {
      setShowHome(true); // Fade in Home after Mail fades out
      document.body.classList.remove('body-lock');
    }, 1000); // Match this duration with your fade-out duration
  };

  useEffect(() => {
    if (showMail) {
      document.body.classList.add('body-lock'); // Lock body scroll
    }
  }, [showMail]);


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
              {showMail && <div className={`fade-out ${showMail ? '' : 'hidden'}`}>
                <Mail onClick={handleMailClick} />
              </div>}
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
