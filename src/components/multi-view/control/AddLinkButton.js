import { useState, useRef } from 'react';
import { ViewGridAddIcon } from '@heroicons/react/outline';

import Tooltip from '../../ui/Tooltip';
import UrlModal from '../UrlModal';

const AddLinkButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const btnRef = useRef();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="h-10 w-10 text-green-300 hover:text-green-400"
        onClick={() => setIsOpen((prevStatus) => !prevStatus)}
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
      {isTooltipShown && <Tooltip title="增加影片" parentNode={btnRef} />}
      <UrlModal isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default AddLinkButton;
