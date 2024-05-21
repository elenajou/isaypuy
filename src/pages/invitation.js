import savethedate from '../images/save-the-date/savethedate.svg';
import flowers from '../images/save-the-date/flowers.svg';
import cloud1 from '../images/save-the-date/cloud-1.svg';
import cloud2 from '../images/save-the-date/cloud-2.svg';
import puyisabel from '../images/save-the-date/puyisabel.svg';
import sabado6pm from '../images/save-the-date/sabado6pm.svg';
import enero2025 from '../images/save-the-date/enero2025.svg';
import '../css/invitation.css';

function Invitation() {
  return (
    <div id="invitation">
      <img id="flowers" class="addFadein" src={flowers} alt="IsaYPuy"/>
      <img id="cloud1" class="addFadein" src={cloud1} alt="IsaYPuy"/>
      <img id="cloud2" class="addFadein" src={cloud2} alt="IsaYPuy"/>
      <img id="savethedate" class="hide" src={savethedate} alt="IsaYPuy"/>
      <img id="puyisabel" class="hide" src={puyisabel} alt="IsaYPuy"/>
      <img id="enero2025" class="hide" src={enero2025} alt="IsaYPuy"/>
      <img id="sabado6pm" class="hide" src={sabado6pm} alt="IsaYPuy"/>
      <script src="../scripts/invitation-animation.js"></script>
    </div>
  );
}

export default Invitation;
