import { useState } from 'react';
import StreamCircleList from '../stream/StreamCircleList';
import ControlModal from '../multiView/ControlModal';
import { AdjustmentsIcon } from '@heroicons/react/outline';
import Tooltip from '../ui/Tooltip';

function MultiViewHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full px-4">
      <div className="flex justify-between items-center">
        <StreamCircleList />
        <div className="flex items-center">
          <Tooltip title="開啟控制面版" position="right">
            <button className="w-10 h-10">
              <AdjustmentsIcon
                className="text-yellow-300 hover:text-yellow-400 rounded-full"
                onClick={() => setIsOpen((prevStatus) => !prevStatus)}
              />
            </button>
          </Tooltip>
        </div>
      </div>
      <ControlModal isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default MultiViewHeader;