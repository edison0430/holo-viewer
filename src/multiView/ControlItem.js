import { useDispatch } from 'react-redux';
import {
  PlayIcon,
  PauseIcon,
  TrashIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  ChatAlt2Icon as ShowChatIcon,
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
} from '../actions';
import useMemberMapping from '../hooks/useMemberMapping';

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

  return (
    <div className="flex mb-4">
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
          <button
            className="w-8 h-8 text-gray-500 hover:text-gray-600"
            onClick={() => {
              isChatShown ? dispatch(hideChat(id)) : dispatch(showChat(id));
            }}
          >
            {isChatShown ? <HideChatIcon /> : <ShowChatIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlItem;
