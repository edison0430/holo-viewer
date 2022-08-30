import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchLiveStreams,
  fetchScheduledStreams,
  fetchChannels,
  fetchMembers,
} from '@/store/stream/streamSlice';
import StreamItem from './StreamItem';
import { selectLiveStream } from '@/store/stream/streamSlice';

function StreamList() {
  const dispatch = useDispatch();
  const liveStream = useSelector(selectLiveStream);

  useEffect(() => {
    dispatch(fetchLiveStreams());
    dispatch(fetchScheduledStreams());
    dispatch(fetchChannels());
    dispatch(fetchMembers());
  }, [dispatch]);

  const renderLiveStream = () =>
    liveStream.streams.map((stream) => {
      return <StreamItem stream={stream} key={stream.id} />;
    });

  return (
    <div className="flex flex-shrink-0 space-x-4  no-scrollbar">
      {renderLiveStream()}
    </div>
  );
}

export default StreamList;
