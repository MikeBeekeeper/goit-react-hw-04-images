import PropTypes from 'prop-types';
import React, { useEffect, useCallback } from 'react';
import css from '../modal/modal.module.css';

const Modal = ({ onModalClick, children }) => {
  // const hideModalKeydown = e => {
  //   if (e.key === 'Escape') {
  //     onModalClick();
  //   }
  // };

  const hideModalClick = ({target,currentTarget}) => {
    if (target === currentTarget) {
      onModalClick();
    }
  };

  const hideModalKeydown = useCallback(({key, target, currentTarget}) => {
    if (key === 'Escape') {
      hideModalClick(target,currentTarget);
    }
  }, [hideModalClick]);

  

  useEffect(() => {
    window.addEventListener('keydown', hideModalKeydown);
    return () => {
      window.removeEventListener('keydown', hideModalKeydown);
    };
  }, [hideModalKeydown]);

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
