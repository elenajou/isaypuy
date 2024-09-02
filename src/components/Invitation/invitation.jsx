import background from '../../images/invitation.png';

import './invitation.css';

function Invitation() {
  return (
    <div id="invitation">
      {/* <img id="background-1" src={background} alt="IsaYPuy"/> */}
      <div class="information">
        <div class="ceremonia">
          <h2>Ceremonia</h2>
          <p>Dia <span>25 de Enero, 2025</span></p>
          <button class="button">CONFIRMAR ASISTENCIA</button>
        </div>
        <div class="lugar">
          <h2>Lugar</h2>
          <p>Boquete, Chiriqui</p>
          <button class="button">COMO LLEGAR?</button>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
