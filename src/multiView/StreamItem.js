import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '../ui/Tooltip';
import useMemberMapping from '../hooks/useMemberMapping';
import { addStreamToMultiView, removeStreamFromMultiView } from '../actions/';

function StreamItem({ stream }) {
  const dispatch = useDispatch();
  const multiViewList = useSelector((state) => state.multiViewReducer);
  const member = useMemberMapping(stream.channel_id);

  const toggleStream = (stream) => {
    multiViewList.some((item) => item.id === stream.id)
      ? dispatch(removeStreamFromMultiView(stream.id))
      : dispatch(addStreamToMultiView(stream));
  };

  return (
    <Tooltip title={`${member?.name} - ${stream.title}`} position="left">
      <button
        className={`rounded-full  ${
          multiViewList.some((item) => item.id === stream.id) &&
          'ring-4 ring-red-500'
        }`}
        onClick={() => toggleStream(stream)}
      >
        <img
          className="w-12 h-12 rounded-full"
          src={member?.avatar}
          alt="avatar"
        />
      </button>
    </Tooltip>
  );
}

export default StreamItem;
