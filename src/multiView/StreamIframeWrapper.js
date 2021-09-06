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
  const { id, room, isPlaying, isMuted } = stream;
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    let player = YoutubePlayer(`player-${id}`, {
      width: '100%',
      height: '100%',
      videoId: room,
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
    <div className="wrapper flex h-full">
      <div className="w-10/12 flex-1" id={`player-${stream.id}`}></div>
      <div className="w-2/12 flex-none">
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
