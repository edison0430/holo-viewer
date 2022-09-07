import axios from 'axios';

import { Stream, Channel, Member } from '@/store/stream/stream.types';

const service = axios.create({
  baseURL: 'https://holo.dev/api/v1',
});

export const apiFetchLiveStream = () =>
  service.get<{ lives: Stream[] }>('/lives/current');

export const apiFetchScheduledStream = () =>
  service.get<{ lives: Stream[] }>('/lives/scheduled');

export const apiFetchChannels = (page: number) =>
  service.get<{ channels: Channel[]; total: number }>(
    `channels?limit=100&page=${page}`
  );

export const apiFetchMembers = () => service.get<Member[]>('members');
