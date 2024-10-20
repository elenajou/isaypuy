import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import InnerHTML from 'dangerously-set-html-content';
import DOMPurify from 'dompurify';

import './customModal.css';

function CustomModal({caption, classes, buttonID, customStyle, content, onBtnClick}) {
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById(buttonID));

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    document.body.classList.add('body-lock');
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    document.body.classList.remove('body-lock');
    setIsOpen(false);
  }
  
  return (
    <div className="customModal">
      <div className={`${classes}`} onClick={openModal}>{caption}</div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={customStyle}
        contentLabel="Modal"
      >
        <div>
          <div className="card-container">
          <button className="close-button" onClick={closeModal}>
            &times; {/* Close "X" icon */}
          </button>
            {content}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CustomModal;