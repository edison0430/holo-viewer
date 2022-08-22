import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import YoutubePlayer from 'youtube-player';
import { playVideo, pauseVideo } from '@/actions';
import Spin from '@/components/ui/Spin';

const stateMapping = {
  playing: 1,
  paused: 2,
};

function StreamIframeWrapper({ stream }) {
  const dispatch = useDispatch();
  const { id, room, isPlaying, isMuted, isChatShown } = stream;
  const [player, setPlayer] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let player = YoutubePlayer(`player-${id}`, {
      width: '100%',
      height: '100%',
      videoId: room,
      playerVars: {
        playsinline: 1,
      },
    });
    setPlayer(player);

    const listener = player.on('stateChange', (event) => {
      if (event.data === stateMapping['playing']) {
        dispatch(playVideo(id));
      } else if (event.data === stateMapping['paused']) {
        dispatch(pauseVideo(id));
      }
    });

    player.on('ready', () => setIsReady(true));

    return () => player.off(listener);
  }, [id, room, dispatch]);

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

  return (
    <div className="flex flex-col lg:flex-row bg-black">
      {/* video */}
      <div className="relative pt-[56.25%] lg:pt-0 lg:flex-1">
        {!isReady && renderLoading()}
        <div
          className="absolute top-0 left-0 w-full h-full"
          id={`player-${stream.id}`}
        ></div>
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
}

export default StreamIframeWrapper;
