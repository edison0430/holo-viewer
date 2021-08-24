import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import { useEffect, useState } from 'react';
dayjs.extend(relativeTime);
dayjs.extend(duration);

function StreamChip({ stream }) {
  const [startFromNow, setStartFromNow] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = dayjs();
      const startAt = dayjs(stream.start_at);
      const duration = dayjs.duration(now.diff(startAt));
      setStartFromNow(duration.format('HH:mm:ss'));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <span className="absolute bottom-2 right-2 text-white font-bold tracking-wide bg-red-600/90 px-2 py-0 rounded-sm">
      {startFromNow}
    </span>
  );
}

export default StreamChip;
