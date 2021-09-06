import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchLiveStream,
  fetchScheduledStream,
  fetchChannel,
  fetchMember,
  addStreamToMultiView,
  removeStreamFromMultiView,
} from '../actions/';

function StreamCircleList() {
  const dispatch = useDispatch();
  const liveStream = useSelector((state) => state.streamReducer.liveStream);
  const channels = useSelector((state) => state.streamReducer.channel);
  const members = useSelector((state) => state.streamReducer.member);
  const multiViewList = useSelector((state) => state.multiViewReducer);

  useEffect(() => {
    dispatch(fetchLiveStream());
    dispatch(fetchScheduledStream());
    dispatch(fetchChannel());
    dispatch(fetchMember());
  }, [dispatch]);

  const toggleStream = (stream) => {
    multiViewList.some((item) => item.id === stream.id)
      ? dispatch(removeStreamFromMultiView(stream.id))
      : dispatch(
          addStreamToMultiView({ ...stream, isPlaying: false, isMuted: false })
        );
  };

  const renderLiveStreamCircle = liveStream.map((stream) => {
    const memberId = channels.find(
      (channel) => channel.id === stream.channel_id
    )?.member_id;
    const member = members.find((member) => member.id === memberId);

    return (
      <button
        className={`rounded-full  ${
          multiViewList.some((item) => item.id === stream.id) &&
          'ring-4 ring-red-500'
        }`}
        key={stream.id}
        onClick={() => toggleStream(stream)}
      >
        <img
          className="w-12 h-12 rounded-full"
          src={member?.avatar}
          alt="avatar"
        />
      </button>
    );
  });

  return <div className="flex space-x-4">{renderLiveStreamCircle}</div>;
}

export default StreamCircleList;
