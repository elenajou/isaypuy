import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import InnerHTML from 'dangerously-set-html-content';
import DOMPurify from 'dompurify';

import './customModal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

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
      <button className={`button ${classes}`} onClick={openModal}>{caption}</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyle}
        contentLabel="Example Modal"
      >
        <div className="modal-body">
          <button class="btn-close" onClick={closeModal}></button>
          {content}
        </div>
      </Modal>
    </div>
  );
}

export default CustomModal;