import { useSelector } from 'react-redux';

import StreamIframeWrapper from '@/components/multi-view/StreamIframeWrapper';

const gridStyle = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-2',
  4: 'lg:grid-cols-2',
  5: 'lg:grid-cols-3',
  6: 'lg:grid-cols-3',
  7: 'lg:grid-cols-3',
  8: 'lg:grid-cols-3',
  9: 'lg:grid-cols-3',
};

function MultiView() {
  const multiViewList = useSelector((state) => state.multiViewReducer);
  const multiViewLength = multiViewList.length;

  const renderIframeWrapper = () => {
    if (multiViewLength >= 0) {
      return multiViewList.map((stream) => {
        return <StreamIframeWrapper key={stream.id} stream={stream} />;
      });
    }
  };

  return (
    <div
      className={`min-h-[calc(100vh-56px)] lg:grid lg:grid-flow-row dark:bg-gray-800 ${
        multiViewLength && gridStyle[multiViewLength]
      }`}
    >
      {renderIframeWrapper()}
    </div>
  );
}

export default MultiView;
