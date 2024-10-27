import FadeInSection from '../FadeInSection/fadeInSection';
import main from '../../images/main.jpg';
import logo from '../../images/logo.png';

import './landing.css';

function Landing() {
  
  return (
    <div id="landing-page">
      <img id="background-photo" src={main} alt="IsaYPuy"/>
      <img id="logo" src={logo} alt="IsaYPuy"/>
      <div className="landing-title">
        <p className="landing-title-1"><span>I</span>SA&ensp;<span className="landing-title-n">&</span>&ensp;<span>P</span>UY</p>
      </div>
    </div>
  );
}

export default Landing;
