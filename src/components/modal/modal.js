import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import css from '../modal/modal.module.css';

const Modal = ({ onModalClick, children }) => {
  const hideModalKeydown = e => {
    if (e.key === 'Escape') {
      onModalClick();
      // window.removeEventListener('keydown', hideModalKeydown)
    }
  };

  const hideModalClick = e => {
    if (e.target.dataset.action === 'overlay') {
      onModalClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', hideModalKeydown);
    return () => {
      window.removeEventListener('keydown', hideModalKeydown);
    };
  }, []);

  return (
    <div className={css.Overlay} onClick={hideModalClick} data-action="overlay">
      <div className={css.Modal}>{children}</div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onModalClick: PropTypes.func.isRequired,
};
