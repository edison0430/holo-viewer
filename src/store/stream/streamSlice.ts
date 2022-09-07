import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  apiFetchLiveStream,
  apiFetchScheduledStream,
  apiFetchChannels,
  apiFetchMembers,
} from '@/apis/holoDev';
import { Stream, Channel, Member } from './stream.types';
import { RootState } from '../store';

export type StreamState = {
  readonly liveStreams: {
    isLoading: boolean;
    streams: Stream[];
  };
  readonly scheduledStreams: {
    isLoading: boolean;
    streams: Stream[];
  };
  readonly channels: Channel[];
  readonly members: Member[];
};

export const fetchLiveStreams = createAsyncThunk(
  'stream/fetchLiveStreams',
  async () => {
    const response = await apiFetchLiveStream();

    const liveStreams = response.data.lives.map((live) => {
      return {
        ...live,
        status: 'live',
      };
    });

    return liveStreams;
  }
);

export const fetchScheduledStreams = createAsyncThunk(
  'stream/fetchScheduledStreams',
  async () => {
    const response = await apiFetchScheduledStream();

    const scheduledStreams = response.data.lives.map((live) => {
      return {
        ...live,
        status: 'scheduled',
      };
    });

    return scheduledStreams;
  }
);

export const fetchChannels = createAsyncThunk(
  'stream/fetchChannels',
  async () => {
    let channels: Channel[] = JSON.parse(
      sessionStorage.getItem('channels') || '[]'
    );

    if (channels.length === 0) {
      let page = 1;
      let hasNextPage = true;
      while (hasNextPage) {
        const response = await apiFetchChannels(page);
        channels = channels.concat(response.data.channels);

        if (channels.length < response.data.total) {
          page++;
        } else {
          hasNextPage = false;
        }
      }

      sessionStorage.setItem('channels', JSON.stringify(channels));
    }

    return channels;
  }
);

export const fetchMembers = createAsyncThunk(
  'stream/fetchMembers',
  async () => {
    let members: Member[] = JSON.parse(
      sessionStorage.getItem('members') || '[]'
    );

    if (members.length === 0) {
      const response = await apiFetchMembers();
      members = response.data;
      sessionStorage.setItem('members', JSON.stringify(members));
    }

    return members;
  }
);

const initialState: StreamState = {
  liveStreams: {
    isLoading: false,
    streams: [],
  },
  scheduledStreams: {
    isLoading: false,
    streams: [],
  },
  channels: [],
  members: [],
};

const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLiveStreams.pending, (state, action) => {
      state.liveStreams.isLoading = true;
    });
    builder.addCase(fetchLiveStreams.fulfilled, (state, action) => {
      state.liveStreams = {
        isLoading: false,
        streams: action.payload,
      };
    });
    builder.addCase(fetchScheduledStreams.pending, (state, action) => {
      state.scheduledStreams.isLoading = true;
    });
    builder.addCase(fetchScheduledStreams.fulfilled, (state, action) => {
      state.scheduledStreams = {
        isLoading: false,
        streams: action.payload,
      };
    });
    builder.addCase(fetchChannels.fulfilled, (state, action) => {
      state.channels = action.payload;
    });
    builder.addCase(fetchMembers.fulfilled, (state, action) => {
      state.members = action.payload;
    });
  },
});

export default streamSlice.reducer;

export const selectLiveStream = (state: RootState) => state.stream.liveStreams;

export const selectScheduledStream = (state: RootState) =>
  state.stream.scheduledStreams;

export const selectChannels = (state: RootState) => state.stream.channels;

export const selectMembers = (state: RootState) => state.stream.members;
