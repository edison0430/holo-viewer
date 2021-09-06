import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import YoutubePlayer from 'youtube-player';
import { playVideo, pauseVideo } from '../actions';

const stateMapping = {
  playing: 1,
  paused: 2,
};

function StreamIframeWrapper({ stream }) {
  const dispatch = useDispatch();
  const { id, room, isPlaying, isMuted, isChatShown } = stream;
  const [player, setPlayer] = useState(null);

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

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="flex-1 h-full lg:h-full" id={`player-${stream.id}`}></div>
      {isChatShown && (
        <div className="w-full lg:w-[400px] h-[70%] lg:h-full">
          <iframe
            title="chatRoom"
            src={chatRoomIframeSrc}
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      )}
    </div>
  );
}

export default StreamIframeWrapper;
