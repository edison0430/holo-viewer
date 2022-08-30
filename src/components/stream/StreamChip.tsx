import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

import { Stream as TStream } from '@/store/stream/stream.types';

dayjs.extend(relativeTime);
dayjs.extend(duration);

type StreamChipProps = {
  stream: TStream;
};

function getDuration(startAt: string | undefined): string {
  const now = dayjs();
  const duration = dayjs.duration(now.diff(dayjs(startAt)));

  return duration.format('HH:mm:ss');
}

const StreamChip = ({ stream }: StreamChipProps) => {
  const { start_at: startAt } = stream;
  const [duration, setDuration] = useState(() => getDuration(startAt));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration(getDuration(startAt));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startAt]);

  return (
    <span className="absolute bottom-2 right-2 text-white font-bold tracking-wide bg-red-600/90 px-2 py-0 rounded-sm">
      {duration}
    </span>
  );
};

export default StreamChip;
