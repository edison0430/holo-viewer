import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import { useEffect, useState } from 'react';
dayjs.extend(relativeTime);
dayjs.extend(duration);

function getDuration(startAt) {
  const now = dayjs();
  const duration = dayjs.duration(now.diff(dayjs(startAt)));

  return duration.format('HH:mm:ss');
}

function StreamChip({ stream }) {
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
}

export default StreamChip;
