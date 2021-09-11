import { AdjustmentsIcon } from '@heroicons/react/outline';
import { useState, useRef } from 'react';
import ControlModal from '../ControlModal';
import Tooltip from '../../ui/Tooltip';

const MediaButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const btnRef = useRef();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="w-10 h-10"
        onMouseEnter={() => {
          setIsTooltipShown(true);
        }}
        onMouseLeave={() => {
          setIsTooltipShown(false);
        }}
        ref={btnRef}
      >
        <AdjustmentsIcon
          className="text-yellow-300 hover:text-yellow-400 rounded-full"
          onClick={() => setIsOpen((prevStatus) => !prevStatus)}
        />
      </button>
      {isTooltipShown && <Tooltip title="開啟控制面版" parentNode={btnRef} />}
      <ControlModal isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default MediaButton;
