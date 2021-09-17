import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import StreamItem from './StreamItem';
import SkeletonItem from './SkeletonItem';
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

  const renderLiveStreamItem = () => {
    if (liveStream.isLoading) {
      return renderLoadingSkeleton();
    }

    return liveStream.items.length === 0
      ? 'There is no live stream now'
      : liveStream.items.map((stream) => {
          return <StreamItem key={stream.id} stream={stream} />;
        });
  };

  const renderScheduledStreamItem = () => {
    if (scheduledStream.isLoading) {
      return renderLoadingSkeleton();
    }

    return scheduledStream.items.length === 0
      ? 'There is no scheduled stream now'
      : scheduledStream.items
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
      .fill()
      .map((item, index) => {
        return <SkeletonItem key={index} />;
      });
  };

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <div>
        <p className="text-lg font-bold text-green-600 mb-5">直播中</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {renderLiveStreamItem()}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg font-bold text-green-600 mb-5">預定直播</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {renderScheduledStreamItem()}
        </div>
      </div>
    </div>
  );
}

export default StreamList;
