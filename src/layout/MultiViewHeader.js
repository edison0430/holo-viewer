import StreamList from '../multiView/StreamList';
import MediaButton from '../multiView/control/MediaButton';

function MultiViewHeader() {
  return (
    <>
      {/* stream list */}
      <div className="flex items-center overflow-x-auto no-scrollbar h-full px-2">
        <div className="flex items-center justify-start">
          <StreamList />
        </div>
      </div>

      {/* control list */}
      <div className="flex-1 flex justify-end">
        <div className="flex items-center">
          <MediaButton />
        </div>
      </div>
    </>
  );
}

export default MultiViewHeader;
