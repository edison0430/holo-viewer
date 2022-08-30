import { useDispatch } from 'react-redux';
import {
  PlayIcon,
  PauseIcon,
  TrashIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  ChatAlt2Icon as ShowChatIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';
import { ChatAlt2Icon as HideChatIcon } from '@heroicons/react/solid';

import {
  playStream,
  pauseStream,
  mute,
  unMute,
  showChat,
  hideChat,
  removeStream,
} from '@/store/multiView/multiViewSlice';
import useMemberMapping from '@/hooks/useMemberMapping';
import { MultiView } from '@/store/multiView/multiView.types';

const ControlItem = ({
  id,
  channel_id,
  title,
  isPlaying,
  isMuted,
  isChatShown,
}: MultiView) => {
  const dispatch = useDispatch();
  const member = useMemberMapping(channel_id);

  const renderAvatar = () => {
    if (member?.avatar) {
      return (
        <img
          className="self-center w-12 h-12 rounded-full mr-3"
          src={member?.avatar}
          alt="avatar"
        />
      );
    } else {
      return <UserCircleIcon className="w-12 h-12 mr-3" />;
    }
  };

  return (
    <div className="flex mb-4">
      {renderAvatar()}
      <div className="flex-1 min-w-0 space-y-2">
        <p className="truncate">{title}</p>
        <div className="flex justify-center items-center space-x-4">
          <button
            className="w-8 h-8 text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            onClick={() =>
              isPlaying ? dispatch(pauseStream(id)) : dispatch(playStream(id))
            }
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            className="w-8 h-8 text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            onClick={() =>
              isMuted ? dispatch(unMute(id)) : dispatch(mute(id))
            }
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </button>
          <button
            className="w-8 h-8 text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            onClick={() => {
              isChatShown ? dispatch(hideChat(id)) : dispatch(showChat(id));
            }}
          >
            {isChatShown ? <HideChatIcon /> : <ShowChatIcon />}
          </button>
          <button
            className="w-8 h-8 text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            onClick={() => dispatch(removeStream(id))}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlItem;
