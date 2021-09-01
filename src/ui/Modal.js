import { useEffect } from 'react';
import { useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, toggle, children, title }) => {
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!isOpen) return;

        toggle(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);

    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen, ref, toggle]);

  const renderHeader = () => {
    return <div className="text-2xl">{title}</div>;
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
          <div className="relative flex flex-col bg-white pointer-events-auto px-7 py-4 space-y-4 rounded">
            {title && renderHeader()}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>,
    document.querySelector('#modal')
  );
};

export default Modal;