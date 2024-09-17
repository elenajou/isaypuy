import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import InnerHTML from 'dangerously-set-html-content';
import DOMPurify from 'dompurify';

import './customModal.css';

function CustomModal({caption, classes, buttonID, customStyle, content}) {
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById(buttonID));
  
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <div className="customModal">
      <div className={`${classes}`} onClick={openModal}>{caption}</div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyle}
        contentLabel="Example Modal"
      >
        <div class="modal-body">
        {/* <button id="btn-close" onClick={closeModal}></button> */}
          <div>{content}</div>
        </div>
      </Modal>
    </div>
  );
}

export default CustomModal;