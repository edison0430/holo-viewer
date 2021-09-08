import { useSelector } from 'react-redux';

function useMemberMapping(channelId) {
  const channels = useSelector((state) => state.streamReducer.channel);
  const members = useSelector((state) => state.streamReducer.member);

  const memberId = channels.find(
    (channel) => channel.id === channelId
  )?.member_id;
  const member = members.find((member) => member.id === memberId);

  return member;
}

export default useMemberMapping;
