import { useSelector } from 'react-redux';
import StreamIframeWrapper from './StreamIframeWrapper';

const gridStyle = {
  1: 'grid-cols-1 grid-rows-1',
  2: 'grid-cols-2 grid-rows-1',
  3: 'grid-cols-2 grid-rows-2',
  4: 'grid-cols-2 grid-rows-2',
  5: 'grid-cols-3 grid-rows-2',
  6: 'grid-cols-3 grid-rows-2',
  7: 'grid-cols-3 grid-rows-2',
  8: 'grid-cols-3 grid-rows-2',
  9: 'grid-cols-3 grid-rows-2',
};

function MultiViewIndex() {
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
      className={`h-[calc(100vh-56px)] grid grid-flow-row ${
        multiViewLength && gridStyle[multiViewLength]
      }`}
    >
      {renderIframeWrapper()}
    </div>
  );
}

export default MultiViewIndex;
