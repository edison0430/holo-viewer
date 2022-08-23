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
  playVideo,
  pauseVideo,
  mute,
  unMute,
  removeStreamFromMultiView,
  showChat,
  hideChat,
} from '@/store/multi-view/multi-view.action';
import useMemberMapping from '@/hooks/useMemberMapping';

function ControlItem({
  id,
  channelId,
  title,
  isPlaying,
  isMuted,
  isChatShown,
}) {
  const dispatch = useDispatch();
  const member = useMemberMapping(channelId);

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
              isPlaying ? dispatch(pauseVideo(id)) : dispatch(playVideo(id))
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
            onClick={() => dispatch(removeStreamFromMultiView(id))}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlItem;
