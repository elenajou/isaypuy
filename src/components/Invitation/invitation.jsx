import background from '../../images/invitation.png';
import CustomModal from '../CustomModal/customModal.jsx';

import './invitation.css';

let ceremoniaHTML = <div>ceremonia</div>;
let lugarHTML = <div>lugar</div>;

function Invitation() {
  return (
    <div id="invitation">
      {/* <img id="background-1" src={background} alt="IsaYPuy"/> */}
      <div class="information">
        <div class="ceremonia">
          <h2>Ceremonia</h2>
          <p>Dia <span>25 de Enero, 2025</span></p>
          <CustomModal buttonID="ceremonia" content={ceremoniaHTML} caption="CONFIRMAR ASISTENCIA"></CustomModal>
        </div>
        <div class="lugar">
          <h2>Lugar</h2>
          <p>Boquete, Chiriqui</p>
          <CustomModal buttonID="lugar" content={lugarHTML} caption="COMO LLEGAR?"></CustomModal>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
