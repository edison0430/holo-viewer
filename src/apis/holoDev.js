import axios from 'axios';

export default axios.create({
  baseURL: 'https://holo.dev/api/v1',
});

// export const fetchLiveStream = () => request.get('/lives/current');

// export const fetchScheduledStream = () => request.get('/lives/scheduled');
