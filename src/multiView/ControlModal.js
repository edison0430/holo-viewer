import { useDispatch, useSelector } from 'react-redux';
import {
  PlayIcon,
  PauseIcon,
  TrashIcon,
  VolumeUpIcon,
  VolumeOffIcon,
} from '@heroicons/react/outline';
import {
  playVideo,
  pauseVideo,
  mute,
  unMute,
  removeStreamFromMultiView,
} from '../actions';
import Modal from '../ui/Modal';

function ControlModal({ isOpen, toggle }) {
  const dispatch = useDispatch();
  const multiViewList = useSelector((state) => state.multiViewReducer);
  const multiViewLength = multiViewList.length;
  const channels = useSelector((state) => state.streamReducer.channel);
  const members = useSelector((state) => state.streamReducer.member);

  const renderControlList = multiViewList.map(
    ({ id, channel_id, title, isPlaying, isMuted }) => {
      const memberId = channels.find(
        (channel) => channel.id === channel_id
      )?.member_id;
      const member = members.find((member) => member.id === memberId);

      return (
        <div className="flex mb-4" key={id}>
          <img
            className="self-center w-12 h-12 rounded-full mr-3"
            src={member?.avatar}
            alt="avatar"
          />
          <div className="flex-1 min-w-0 space-y-2">
            <p className="truncate">{title}</p>
            <div className="flex justify-center items-center space-x-4">
              <button
                className="w-8 h-8 text-gray-500 hover:text-gray-600"
                onClick={() =>
                  isPlaying ? dispatch(pauseVideo(id)) : dispatch(playVideo(id))
                }
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                className="w-8 h-8 text-gray-500 hover:text-gray-600"
                onClick={() =>
                  isMuted ? dispatch(unMute(id)) : dispatch(mute(id))
                }
              >
                {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </button>
              <button
                className="w-8 h-8 text-gray-500 hover:text-gray-600"
                onClick={() => dispatch(removeStreamFromMultiView(id))}
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <Modal isOpen={isOpen} toggle={toggle} title="控制面版">
      {multiViewLength ? renderControlList : '目前沒有選取到影片'}
    </Modal>
  );
}

export default ControlModal;
