import { useSelector } from 'react-redux';

import { selectChannels, selectMembers } from '@/store/stream/streamSlice';

function useMemberMapping(channelId: number | undefined) {
  const channels = useSelector(selectChannels);
  const members = useSelector(selectMembers);

  const memberId = channels.find(
    (channel) => channel.id === channelId
  )?.member_id;
  const member = members.find((member) => member.id === memberId);

  return member;
}

export default useMemberMapping;
