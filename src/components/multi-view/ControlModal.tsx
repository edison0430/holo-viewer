import { useSelector } from 'react-redux';

import Modal from '../ui/Modal';
import ControlItem from './ControlItem';
import { selectMultiView } from '@/store/multiView/multiViewSlice';

type ControlModalProps = {
  isOpen: boolean;
  toggle: () => void;
};

const ControlModal = ({ isOpen, toggle }: ControlModalProps) => {
  const multiViewList = useSelector(selectMultiView);
  const multiViewLength = multiViewList.length;

  const renderControlList = multiViewList.map(
    ({ id, channel_id, title, isPlaying, isMuted, isChatShown }) => {
      return (
        <ControlItem
          id={id}
          channel_id={channel_id}
          title={title}
          isPlaying={isPlaying}
          isMuted={isMuted}
          isChatShown={isChatShown}
          key={id}
        />
      );
    }
  );

  return (
    <Modal isOpen={isOpen} toggle={toggle} title="控制面版">
      {multiViewLength ? renderControlList : '目前沒有選取到影片'}
    </Modal>
  );
};

export default ControlModal;
