import StreamList from '@/components/multi-view/StreamList';
import MediaButton from '@/components/multi-view/control/MediaButton';
import AddLinkButton from '@/components/multi-view/control/AddLinkButton';

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
        <div className="flex items-center space-x-2">
          <AddLinkButton />
          <MediaButton />
        </div>
      </div>
    </>
  );
}

export default MultiViewHeader;
