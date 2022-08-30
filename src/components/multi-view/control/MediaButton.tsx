import { useState, useRef } from 'react';
import { AdjustmentsIcon } from '@heroicons/react/outline';

import ControlModal from '../ControlModal';
import Tooltip from '../../ui/Tooltip';

const MediaButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="w-10 h-10"
        onClick={() => setIsOpen((prevStatus) => !prevStatus)}
        onMouseEnter={() => {
          setIsTooltipShown(true);
        }}
        onMouseLeave={() => {
          setIsTooltipShown(false);
        }}
        ref={btnRef}
      >
        <AdjustmentsIcon className="text-yellow-300 hover:text-yellow-400 rounded-full" />
      </button>
      {isTooltipShown && (
        <Tooltip title="開啟控制面版" parentNode={btnRef.current!} />
      )}
      <ControlModal isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default MediaButton;
