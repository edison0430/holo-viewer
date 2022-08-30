import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube';

import { playStream, pauseStream } from '@/store/multiView/multiViewSlice';
import Spin from '@/components/ui/Spin';
import { MultiView } from '@/store/multiView/multiView.types';

type StreamIframeWrapperProps = {
  stream: MultiView;
};

const StreamIframeWrapper = ({ stream }: StreamIframeWrapperProps) => {
  const dispatch = useDispatch();
  const { id, room, isPlaying, isMuted, isChatShown } = stream;
  const [player, setPlayer] = useState<YouTubePlayer>();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!player) return;

    if (isPlaying) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }, [player, isPlaying]);

  useEffect(() => {
    if (!player) return;

    if (isMuted) {
      player.mute();
    } else {
      player.unMute();
    }
  }, [player, isMuted]);

  const chatRoomIframeSrc = `https://gaming.youtube.com/live_chat?v=${stream.room}&embed_domain=${window.location.hostname}`;

  const renderLoading = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-black text-white flex justify-center items-center">
        <Spin />
        Loading...
      </div>
    );
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event.target);
    setIsReady(true);
  };

  const onPlayerPlay: YouTubeProps['onPlay'] = () => {
    dispatch(playStream(id));
  };

  const onPlayerPause: YouTubeProps['onPause'] = () => {
    dispatch(pauseStream(id));
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="flex flex-col lg:flex-row bg-black">
      {/* video */}
      <div className="relative pt-[56.25%] lg:pt-0 lg:flex-1">
        {!isReady && renderLoading()}
        <YouTube
          className="absolute top-0 left-0 w-full h-full"
          videoId={room}
          opts={opts}
          onReady={onPlayerReady}
          onPlay={onPlayerPlay}
          onPause={onPlayerPause}
        />
      </div>
      {/* chat */}
      <div
        className={`w-full lg:w-[300px] h-[400px] lg:h-full ${
          !isChatShown && 'hidden'
        }`}
      >
        <iframe
          title="chatRoom"
          src={chatRoomIframeSrc}
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default StreamIframeWrapper;
