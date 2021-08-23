import {
  FETCH_LIVE_STREAM,
  FETCH_SCHEDULED_STREAM,
  FETCH_CHANNEL,
  FETCH_MEMBER,
} from './types';
import holoDev from '../apis/holoDev';
import res from '../response';
import scheduledRes from '../scheduledRes';

export const fetchLiveStream = () => async (dispatch) => {
  const response = await holoDev.get('/lives/current');
  // const response = res;

  dispatch({
    type: FETCH_LIVE_STREAM,
    payload: response.data.lives,
  });
};

export const fetchScheduledStream = () => async (dispatch) => {
  const response = await holoDev.get('/lives/scheduled');
  // const response = scheduledRes;

  dispatch({
    type: FETCH_SCHEDULED_STREAM,
    payload: response.data.lives,
  });
};

export const fetchChannel = () => async (dispatch) => {
  let channel = JSON.parse(sessionStorage.getItem('channel'));

  if (!channel) {
    const response = await holoDev.get('channels?limit=100');
    channel = response.data.channels;
    sessionStorage.setItem('channel', JSON.stringify(channel));
  }

  dispatch({
    type: FETCH_CHANNEL,
    payload: channel,
  });
};

export const fetchMember = () => async (dispatch) => {
  let member = JSON.parse(sessionStorage.getItem('member'));

  if (!member) {
    const response = await holoDev.get('/members');
    member = response.data;
    sessionStorage.setItem('member', JSON.stringify(member));
  }

  dispatch({
    type: FETCH_MEMBER,
    payload: member,
  });
};
