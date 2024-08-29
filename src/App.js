import Landing from './components/Landing/landing.js';
import Countdown from './components/Countdown/countdown.js';
import Invitation from './components/Invitation/invitation.js';
import Retratos from './components/Retratos/retratos.js';
import MoreInfo from './components/MoreInfo/moreinfo.js';
import './App.css';

function App() {
  return (
    <div class="App">
      {/* <header className="App-header"></header> */}
      <Landing/>
      <Countdown/>
      <Retratos/>
      <Invitation/>
      <MoreInfo/>
    </div>
  );
}

export default App;
