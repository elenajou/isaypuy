import React, { useState, useEffect } from 'react';
import CustomModal from '../CustomModal/customModal.jsx';

import './invitation.css';

let ceremoniaBtn = <div>CONFIRMAR ASISTENCIA</div>;
let lugarHTML = <div>lugar</div>;
let lugarBtn = <div>COMO LLEGAR?</div>;

function Invitation() {
  const [ceremoniaModal, setCeremoniaModal] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleSearchModalContent = () => {
    setCeremoniaModal(searchHTML);
  };

  const toggleInvitacionModalContent = () => {
      setCeremoniaModal(invitacionHTML);
  };

  const searchHTML = <div class="modal-body">
    <div class="rsvp-title">RSVP</div>
    <input type="text" name="search-name" id="rsvp-search-name" class="rsvp-input" placeholder='Nombre'/>
    <input type="text" name="search-number" id="rsvp-search-number" class="rsvp-input" placeholder='Numero WhatsApp'/>
    <div class="rsvp-btn">
      <button class="button" onClick={toggleInvitacionModalContent}>BUSCAR</button>
    </div>
  </div>;

  const invitacionHTML = <div class="modal-body">
    <div class="rsvp-title">RSVP</div>
    <div class="rsvp-name">Elena Jou</div>
    <div class="rsvp-contact"><div>Numero de Contacto:</div><div> 0000-0000</div></div>
    <div class="rsvp-seats"><div>Puestos Reservados:</div><div> 2</div></div>
    <label for="rsvp-msg" class="rsvp-caption">Deja un mensaje</label>
    <input type="text" id="rsvp-msg"/>
    <div class="rsvp-btn">
      <button class="button" onClick={toggleSearchModalContent}>Estare ahi!</button>
      <button class="button">No puedo :&#40;</button>
    </div>
  </div>;

  // Default content for modal is 'ceremoniaHTML'
  if (!ceremoniaModal)
    setCeremoniaModal(searchHTML);

  return (
    <div id="invitation">
      {/* <img id="background-1" src={background} alt="IsaYPuy"/> */}
      <div class="information">
        <div class="ceremonia">
          <h2>Ceremonia</h2>
          <p>Dia <span>25 de Enero, 2025</span></p>
          <CustomModal buttonID="ceremonia" content={ceremoniaModal} caption={ceremoniaBtn} classes="button" onBtnClick={toggleSearchModalContent}>
          </CustomModal>
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
