import {
  REQUEST_LIVE_STREAM,
  RECEIVE_LIVE_STREAM,
  REQUEST_SCHEDULED_STREAM,
  RECEIVE_SCHEDULED_STREAM,
  FETCH_CHANNEL,
  FETCH_MEMBER,
} from './types';
import holoDev from '../apis/holoDev';
import res from '../response';
import scheduledRes from '../scheduledRes';

export const fetchLiveStream = () => async (dispatch) => {
  dispatch({
    type: REQUEST_LIVE_STREAM,
  });

  const response = await holoDev.get('/lives/current');
  // const response = res;
  const liveStream = response.data.lives.map((live) => {
    return {
      ...live,
      status: 'live',
    };
  });

  dispatch({
    type: RECEIVE_LIVE_STREAM,
    payload: liveStream,
  });
};

export const fetchScheduledStream = () => async (dispatch) => {
  dispatch({
    type: REQUEST_SCHEDULED_STREAM,
  });

  const response = await holoDev.get('/lives/scheduled');
  // const response = scheduledRes;
  const scheduledStream = response.data.lives.map((live) => {
    return {
      ...live,
      status: 'scheduled',
    };
  });

  dispatch({
    type: RECEIVE_SCHEDULED_STREAM,
    payload: scheduledStream,
  });
};

export const fetchChannel = () => async (dispatch) => {
  let channel = JSON.parse(sessionStorage.getItem('channel')) || [];

  if (channel.length === 0) {
    let page = 1;
    let hasNextPage = true;
    while (hasNextPage) {
      const response = await holoDev.get(`channels?limit=100&page=${page}`);
      channel = channel.concat(response.data.channels);

      if (channel.length < response.data.total) {
        page++;
      } else {
        hasNextPage = false;
      }
    }

    sessionStorage.setItem('channel', JSON.stringify(channel));
  }

  dispatch({
    type: FETCH_CHANNEL,
    payload: channel,
  });
};

export const fetchMember = () => async (dispatch) => {
  let member = JSON.parse(sessionStorage.getItem('member')) || [];

  if (member.length === 0) {
    const response = await holoDev.get('/members');
    member = response.data;
    sessionStorage.setItem('member', JSON.stringify(member));
  }

  dispatch({
    type: FETCH_MEMBER,
    payload: member,
  });
};
