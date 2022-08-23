import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchLiveStream,
  fetchScheduledStream,
  fetchChannel,
  fetchMember,
} from '@/store/stream/stream.action';
import StreamItem from './StreamItem';

function StreamList() {
  const dispatch = useDispatch();
  const liveStream = useSelector((state) => state.streamReducer.liveStream);

  useEffect(() => {
    dispatch(fetchLiveStream());
    dispatch(fetchScheduledStream());
    dispatch(fetchChannel());
    dispatch(fetchMember());
  }, [dispatch]);

  const renderLiveStream = () =>
    liveStream.items.map((stream) => {
      return <StreamItem stream={stream} key={stream.id} />;
    });

  return (
    <div className="flex flex-shrink-0 space-x-4  no-scrollbar">
      {renderLiveStream()}
    </div>
  );
}

export default StreamList;
