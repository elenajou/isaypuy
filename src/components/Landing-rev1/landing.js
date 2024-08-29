import stockPhoto from '../../images/stock_photo.png';

import './landing.css';

function Landing() {
  return (
    <div id="landing-page">
      <img id="background-photo" src={stockPhoto} alt="IsaYPuy"/>
      <div id="landing-name">
        <div class="name">Isabel</div>
        <div class="and">&</div>
        <div class="name">Puy</div>
      </div>
    </div>
  );
}

export default Landing;
