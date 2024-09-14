import { useState } from 'react'
import Landing from './components/Landing/landing.jsx';
import Countdown from './components/Countdown/countdown.jsx';
import Invitation from './components/Invitation/invitation.jsx';
import Retratos from './components/Retratos/retratos.jsx';
import MoreInfo from './components/MoreInfo/moreinfo.jsx';
import ReactModal from 'react-modal';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App" id="App">
      {/* <header className="App-header"></header> */}
      <Landing/>
      <Countdown/>
      <Retratos/>
      <Invitation/>
      <MoreInfo/>
    </div>
  )
}
export default App
