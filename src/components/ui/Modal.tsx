import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
  title: string;
  onOk?: () => void;
};

const Modal = ({ isOpen, toggle, children, title, onOk }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (!ref.current?.contains(event.target as Document)) {
        if (isOpen) {
          toggle();
        }
      }
    };
    window.addEventListener('click', handleOutsideClick, true);

    return () => window.removeEventListener('click', handleOutsideClick, true);
  }, [isOpen, ref, toggle]);

  const renderHeader = () => {
    return <div className="text-2xl">{title}</div>;
  };

  const renderFooter = () => {
    if (onOk) {
      return (
        <button
          className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-sm"
          onClick={() => {
            onOk();
            toggle();
          }}
        >
          確定
        </button>
      );
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50"></div>
      <div className="fixed top-0 overflow-y-auto left-0 z-40 w-full h-full m-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-6/12 lg:w-4/12"
          ref={ref}
        >
          <div className="relative flex flex-col bg-white dark:bg-gray-800 dark:text-gray-100 pointer-events-auto px-7 py-4 space-y-4 rounded">
            {/* header */}
            {title && renderHeader()}
            {/* content */}
            <div>{children}</div>
            {/* footer */}
            <div className="self-end">{renderFooter()}</div>
          </div>
        </div>
      </div>
    </>,
    document.querySelector('#modal')!
  );
};

export default Modal;
