import React, { useState, useEffect } from 'react';
import CustomModal from '../CustomModal/customModal.jsx';
import Search, { ceremoniaBtn } from './search.jsx';
import './invitation.css';

function Invitation() {
  const [ceremoniaModal, setCeremoniaModal] = useState(null);

  const toggleSearchModalContent = () => {
    setCeremoniaModal(<Search />);
  };

  const toggleInvitacionModalContent = () => {
      setCeremoniaModal(<Search />);
  };

  // Set initial modal content
  useEffect(() => {
    if (!ceremoniaModal) {
      setCeremoniaModal(<Search />);
    }
  }, [ceremoniaModal]);

  return (
    <div id="invitation">
      <div className="information">
        <div id="lugar" className="lugar">
          <h2>Lugar</h2>
          <p>Hacienda Los Molinos Boutique</p>
          <p>Boquete, Chiriqui</p>
          <div>
            <div><a className="button waze" href="https://waze.com/ul/hd1t379pm8">Waze</a></div>
            <div><a className="button" href="https://maps.app.goo.gl/EDzE9D7C2dytm77G8">Google Maps</a></div>
          </div>
        </div>
        <div className="ceremonia">
          <h2>Ceremonia</h2>
          <p><span>25 de Enero de 2025</span></p>
          <CustomModal 
            buttonID="ceremonia" 
            content={ceremoniaModal} 
            caption={ceremoniaBtn} 
            classes="button" 
            onBtnClick={toggleSearchModalContent}>
          </CustomModal>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
