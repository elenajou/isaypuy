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
      {/* <img id="background-1" src={background} alt="IsaYPuy"/> */}
      <div className="information">
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
