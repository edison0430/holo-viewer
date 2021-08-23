import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StreamItem from './StreamItem';
import {
  fetchLiveStream,
  fetchScheduledStream,
  fetchChannel,
  fetchMember,
} from '../actions/';

function StreamList() {
  const dispatch = useDispatch();
  const liveStream = useSelector((state) => state.streamReducer.liveStream);
  const scheduledStream = useSelector(
    (state) => state.streamReducer.scheduledStream
  );

  useEffect(() => {
    dispatch(fetchLiveStream());
    dispatch(fetchScheduledStream());
    dispatch(fetchChannel());
    dispatch(fetchMember());
  }, [dispatch]);

  const renderLiveStreamItem = liveStream.map((stream) => {
    return <StreamItem key={stream.id} stream={stream} />;
  });

  const renderScheduledStreamItem = scheduledStream.map((stream) => {
    return <StreamItem key={stream.id} stream={stream} />;
  });

  return (
    <div>
      <div>
        <p className="text-lg font-bold text-green-600 mb-5">直播中</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {liveStream.length === 0
            ? 'There is no live stream now'
            : renderLiveStreamItem}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg font-bold text-green-600 mb-5">預定直播</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {scheduledStream.length === 0
            ? 'There is no scheduled stream now'
            : renderScheduledStreamItem}
        </div>
      </div>
    </div>
  );
}

export default StreamList;
