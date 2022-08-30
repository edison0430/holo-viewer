import { useSelector } from 'react-redux';

import StreamIframeWrapper from '@/components/multi-view/StreamIframeWrapper';
import { selectMultiView } from '@/store/multiView/multiViewSlice';

function MultiView() {
  const multiViewList = useSelector(selectMultiView);
  const multiViewLength = multiViewList.length;

  const renderIframeWrapper = () => {
    return multiViewList.map((stream) => {
      return <StreamIframeWrapper key={stream.id} stream={stream} />;
    });
  };

  const getGridCols = () => {
    switch (multiViewLength) {
      case 1:
        return 'lg:grid-cols-1';
      case 2:
      case 3:
      case 4:
        return 'lg:grid-cols-2';
      default:
        return 'lg:grid-cols-3';
    }
  };

  return (
    <div
      className={`min-h-[calc(100vh-56px)] lg:grid lg:grid-flow-row dark:bg-gray-800 ${getGridCols()}`}
    >
      {renderIframeWrapper()}
    </div>
  );
}

export default MultiView;
