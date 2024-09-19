import background from '../../images/invitation.png';
import CustomModal from '../CustomModal/customModal.jsx';

import './invitation.css';

let ceremoniaHTML = <div class="body">
  <div class="rsvp-title">RSVP</div>
  <div class="rsvp-name">Elena Jou</div>
  <div class="rsvp-contact">Numero de Contacto: 0000-0000</div>
  <div class="rsvp-seats">Puestos Reservados: 2</div>
  <label for="rsvp-msg" class="rsvp-caption">Mensaje</label>
  <input type="text" id="rsvp-msg"/>
  <div class="rsvp-btn-confirm button">Cuenta conmigo!</div>
  <div class="rsvp-btn-reject button">No podre asistir</div>
</div>;

let ceremoniaBtn = <div>CONFIRMAR ASISTENCIA</div>;
let lugarHTML = <div>lugar</div>;
let lugarBtn = <div>COMO LLEGAR?</div>;

function Invitation() {
  return (
    <div id="invitation">
      {/* <img id="background-1" src={background} alt="IsaYPuy"/> */}
      <div class="information">
        <div class="ceremonia">
          <h2>Ceremonia</h2>
          <p>Dia <span>25 de Enero, 2025</span></p>
          <CustomModal buttonID="ceremonia" content={ceremoniaHTML} caption={ceremoniaBtn} classes="button"></CustomModal>
        </div>
        <div class="lugar">
          <h2>Lugar</h2>
          <p>Boquete, Chiriqui</p>
          <CustomModal buttonID="lugar" content={lugarHTML} caption={lugarBtn} classes="button"></CustomModal>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
