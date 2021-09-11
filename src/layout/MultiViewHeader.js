import { useState } from 'react';
import StreamList from '../multiView/StreamList';
import ControlModal from '../multiView/ControlModal';
import { AdjustmentsIcon } from '@heroicons/react/outline';
import Tooltip from '../ui/Tooltip';

function MultiViewHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* stream list */}
      <div className="flex items-center overflow-x-auto no-scrollbar h-full px-2">
        <div className="flex items-center justify-start">
          <StreamList />
        </div>
      </div>

      {/* action list */}
      <div className="flex-1 flex justify-end">
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
        <ControlModal isOpen={isOpen} toggle={toggle} />
      </div>
    </>
  );
}

export default MultiViewHeader;
