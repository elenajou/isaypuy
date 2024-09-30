import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/landing.jsx';
import Countdown from './components/Countdown/countdown.jsx';
import Invitation from './components/Invitation/invitation.jsx';
import Retratos from './components/Retratos/retratos.jsx';
import MoreInfo from './components/MoreInfo/moreinfo.jsx';
import Schedule from './components/Schedule/schedule.jsx';
import GuestList from './components/GuestList/guestlist.jsx';
import './App.css'

function Home() {
  return (
    <div className="App" id="App">
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
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/guestlist' element={<GuestList/>}></Route>
      </Routes>
    </Router>
  )
}
export default App
