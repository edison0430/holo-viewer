import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-tw';
import { useSelector } from 'react-redux';
import StreamChip from './StreamChip';
dayjs.extend(relativeTime);
dayjs.locale('zh-tw');

function StreamItem({ stream }) {
  const channels = useSelector((state) => state.streamReducer.channel);
  const members = useSelector((state) => state.streamReducer.member);

  const memberId = channels.find(
    (channel) => channel.id === stream.channel_id
  )?.member_id;
  const member = members.find((member) => member.id === memberId);

  const renderTimeFromNow = () => {
    const startTime = dayjs(stream.start_at).format('HH:mm');
    const timeFromNow = dayjs(stream.start_at).fromNow();

    return (
      <p className="text-sm">
        將於 {timeFromNow}開始 ({startTime})
      </p>
    );
  };

  return (
    <a
      href={`https://www.youtube.com/watch?v=${stream.room}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div
        key={stream.id}
        className="w-full shadow bg-white rounded-lg overflow-hidden"
      >
        <div className="relative pt-[56.25%]">
          <img
            className="absolute top-0 left-0 w-full h-full object-contain"
            src={stream.cover}
            alt={stream.title}
          />
          {stream.status === 'live' && <StreamChip stream={stream} />}
        </div>
        <div className="flex items-center h-[80px]">
          {/* avatar */}
          <div className="w-[50px] rounded-full overflow-hidden ml-2 mr-4">
            <img src={member?.avatar} alt="avator" />
          </div>
          {/* text */}
          <div className="flex-1 min-w-0">
            <p className="text-lg text-left tracking-wide text-i truncate">
              {stream.title}
            </p>
            <p className="pt-1">{member?.name}</p>
            {stream.status === 'scheduled' && renderTimeFromNow()}
          </div>
        </div>
      </div>
    </a>
  );
}

export default StreamItem;
