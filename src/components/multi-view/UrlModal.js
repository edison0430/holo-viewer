import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addStreamToMultiView } from '@/store/multi-view/multi-view.action';
import Modal from '@/components/ui/Modal';
import Notification from '@/components/ui/Notification';

function UrlModal({ isOpen, toggle }) {
  const [url, setUrl] = useState('');
  const [isNotificationShown, setIsNotificationShwon] = useState(false);
  const [notification, setNotificaton] = useState({ title: '', content: '' });
  const dispatch = useDispatch();
  const multiViewList = useSelector((state) => state.multiViewReducer);

  useEffect(() => {
    if (!isOpen) setUrl('');
  }, [isOpen]);

  const handleOk = () => {
    const regexp = /https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;
    const matched = regexp.exec(url);

    if (!matched) {
      setNotificaton({ title: '操作失敗', content: 'URL 格式不正確' });
      setIsNotificationShwon(true);
      return;
    }

    if (multiViewList.some((item) => item.id === matched[1])) {
      setNotificaton({ title: '操作失敗', content: '此 URL 已在播放列表中' });
      setIsNotificationShwon(true);
      return;
    }

    if (multiViewList.length >= 9) {
      setNotificaton({ title: '操作失敗', content: '已達列表上限' });
      setIsNotificationShwon(true);
      return;
    }

    const stream = {
      id: matched[1],
      title: matched[1],
      room: matched[1],
    };
    dispatch(addStreamToMultiView(stream));
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        title="請輸入欲觀看影片之 Youtube URL link"
        onOk={handleOk}
      >
        <input
          type="text"
          placeholder="e.g. https://www.youtube.com/watch?v=5qap5aO4i9A"
          className="w-full outline-none border-2 dark:border-gray-500 px-2 py-1 dark:bg-gray-700 dark:text-gray-100"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </Modal>
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

export default UrlModal;
