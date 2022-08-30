import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import StreamItem from './StreamItem';
import SkeletonItem from './SkeletonItem';
import {
  fetchLiveStreams,
  fetchScheduledStreams,
  fetchChannels,
  fetchMembers,
  selectLiveStream,
  selectScheduledStream,
} from '@/store/stream/streamSlice';

const StreamList = () => {
  const dispatch = useDispatch();
  const liveStream = useSelector(selectLiveStream);
  const scheduledStream = useSelector(selectScheduledStream);

  useEffect(() => {
    dispatch(fetchLiveStreams());
    dispatch(fetchScheduledStreams());
    dispatch(fetchChannels());
    dispatch(fetchMembers());
  }, [dispatch]);

  const renderLiveStreamItem = () => {
    if (liveStream.isLoading) {
      return renderLoadingSkeleton();
    }

    return liveStream.streams.length === 0
      ? 'There is no live stream now'
      : liveStream.streams.map((stream) => {
          return <StreamItem key={stream.id} stream={stream} />;
        });
  };

  const renderScheduledStreamItem = () => {
    if (scheduledStream.isLoading) {
      return renderLoadingSkeleton();
    }

    return scheduledStream.streams.length === 0
      ? 'There is no scheduled stream now'
      : scheduledStream.streams
          .filter((stream) => {
            // 只顯示預定將於 24 小時之內開始之直播
            return dayjs(stream.start_at).isBefore(dayjs().add(1, 'day'));
          })
          .map((stream) => {
            return <StreamItem key={stream.id} stream={stream} />;
          });
  };

  const renderLoadingSkeleton = () => {
    return Array(5)
      .fill(null)
      .map((_, index) => {
        return <SkeletonItem key={index} />;
      });
  };

  return (
    <div className="p-4 min-h-screen bg-gray-100 dark:bg-gray-800">
      <div>
        <p className="text-lg font-bold text-green-600 dark:text-green-300 mb-5">
          直播中
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 dark:text-gray-100">
          {renderLiveStreamItem()}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg font-bold text-green-600 dark:text-green-300 mb-5">
          預定直播
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 dark:text-gray-100">
          {renderScheduledStreamItem()}
        </div>
      </div>
    </div>
  );
};

export default StreamList;
