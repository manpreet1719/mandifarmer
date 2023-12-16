// Modal.js

import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup Modal"
      ariaHideApp={false} // to prevent a warning in React 17+
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: '240px'
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
