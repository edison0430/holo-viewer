import { useState, useRef } from 'react';
import { ViewGridAddIcon } from '@heroicons/react/outline';
import ReactGA from 'react-ga4'

import Tooltip from '../../ui/Tooltip';
import UrlModal from '../UrlModal';

const AddLinkButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsOpen(true)

    ReactGA.event({
      category: 'app',
      action: 'open_url_modal',
    });
  }

  return (
    <>
      <button
        className="h-10 w-10 text-green-300 hover:text-green-400"
        onClick={() => openModal()}
        onMouseEnter={() => {
          setIsTooltipShown(true);
        }}
        onMouseLeave={() => {
          setIsTooltipShown(false);
        }}
        ref={btnRef}
      >
        <ViewGridAddIcon />
      </button>
      {isTooltipShown && (
        <Tooltip title="增加影片" parentNode={btnRef.current!} />
      )}
      <UrlModal isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default AddLinkButton;
