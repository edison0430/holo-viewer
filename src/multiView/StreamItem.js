import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '../ui/Tooltip';
import Notification from '../ui/Notification';
import useMemberMapping from '../hooks/useMemberMapping';
import { addStreamToMultiView, removeStreamFromMultiView } from '../actions/';

function StreamItem({ stream }) {
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const [isNotificationShown, setIsNotificationShwon] = useState(false);
  const [notification, setNotificaton] = useState({ title: '', content: '' });
  const btnRef = useRef();
  const dispatch = useDispatch();
  const multiViewList = useSelector((state) => state.multiViewReducer);
  const member = useMemberMapping(stream.channel_id);

  const toggleStream = (stream) => {
    if (multiViewList.some((item) => item.id === stream.id)) {
      dispatch(removeStreamFromMultiView(stream.id));
    } else {
      if (multiViewList.length >= 9) {
        setNotificaton({ title: '操作失敗', content: '已達列表上限' });
        setIsNotificationShwon(true);
        return;
      }
      dispatch(addStreamToMultiView(stream));
    }
  };

  return (
    <>
      <button
        className={`rounded-full  ${
          multiViewList.some((item) => item.id === stream.id) &&
          'ring-4 ring-red-500'
        }`}
        onClick={() => toggleStream(stream)}
        onMouseEnter={() => {
          setIsTooltipShown(true);
        }}
        onMouseLeave={() => {
          setIsTooltipShown(false);
        }}
        ref={btnRef}
      >
        <img
          className="w-12 h-12 rounded-full"
          src={member?.avatar}
          alt="avatar"
        />
      </button>
      {isTooltipShown && (
        <Tooltip
          title={`${member?.name} - ${stream.title}`}
          parentNode={btnRef}
        />
      )}
      {isNotificationShown && (
        <Notification
          title={notification.title}
          content={notification.content}
          onClose={() => setIsNotificationShwon(false)}
        />
      )}
    </>
  );
}

export default StreamItem;
