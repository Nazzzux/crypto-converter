import { FC, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { ReactComponent as CloseIcon } from 'assets/icons/CloseIcon.svg';

import { IModalProps } from './types';

import styles from './Modal.module.scss';

export const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  const modalRootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', 'modal-root');
      document.body.appendChild(modalRoot);
    }
    modalRootRef.current = modalRoot;

    return () => {
      if (modalRootRef.current && modalRootRef.current.childNodes.length === 0) {
        modalRootRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClose} data-testid="modal-backdrop">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!,
  );
};
