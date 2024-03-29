import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { XIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';

type NotificationProps = {
  title: string;
  content: string;
  duration?: number;
  onClose: () => void;
};

const Notification = ({
  title,
  content,
  duration = 3000,
  onClose,
}: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-20 left-1/2 px-6 py-3 rounded-md -translate-x-1/2 shadow-notification bg-white dark:bg-gray-700 dark:text-gray-100 w-1/2 max-w-sm">
        <div className="relative">
          <h2 className="mb-2 pr-6">{title}</h2>
          <p className="text-sm">{content}</p>
          <button
            className="absolute top-0 right-2 w-4 h-4"
            onClick={() => onClose()}
          >
            <XIcon />
          </button>
        </div>
      </div>
    </>,
    document.getElementById('notification')!
  );
};

Notification.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  duration: PropTypes.number,
  onCLose: PropTypes.func,
};

export default Notification;
