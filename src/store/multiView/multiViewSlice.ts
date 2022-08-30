import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import { Stream } from '../stream/stream.types';
import { MultiView } from './multiView.types';

// interface MultiView extends Stream {
//   isChatShown: Boolean;
//   isPlaying: Boolean;
//   isMuted: Boolean;
// }

const initialState: MultiView[] = [];

const multiViewSlice = createSlice({
  name: 'multiView',
  initialState,
  reducers: {
    addStream: (state, action: PayloadAction<Stream>) => {
      return [
        ...state,
        {
          ...action.payload,
          isChatShown: true,
          isPlaying: false,
          isMuted: false,
        },
      ];
    },
    removeStream: (state, action: PayloadAction<Stream['id']>) => {
      return state.filter((stream) => stream.id !== action.payload);
    },
    playStream: (state, action: PayloadAction<Stream['id']>) => {
      return state.map((stream) => {
        if (stream.id === action.payload) {
          return {
            ...stream,
            isPlaying: true,
          };
        }
        return stream;
      });
    },
    pauseStream: (state, action: PayloadAction<Stream['id']>) => {
      return state.map((stream) => {
        if (stream.id === action.payload) {
          return {
            ...stream,
            isPlaying: false,
          };
        }
        return stream;
      });
    },
    mute: (state, action: PayloadAction<Stream['id']>) => {
      return state.map((stream) => {
        if (stream.id === action.payload) {
          return {
            ...stream,
            isMuted: true,
          };
        }
        return stream;
      });
    },
    unMute: (state, action: PayloadAction<Stream['id']>) => {
      return state.map((stream) => {
        if (stream.id === action.payload) {
          return {
            ...stream,
            isMuted: false,
          };
        }
        return stream;
      });
    },
    showChat: (state, action: PayloadAction<Stream['id']>) => {
      return state.map((stream) => {
        if (stream.id === action.payload) {
          return {
            ...stream,
            isChatShown: true,
          };
        }
        return stream;
      });
    },
    hideChat: (state, action: PayloadAction<Stream['id']>) => {
      return state.map((stream) => {
        if (stream.id === action.payload) {
          return {
            ...stream,
            isChatShown: false,
          };
        }
        return stream;
      });
    },
  },
});

export default multiViewSlice.reducer;

export const {
  addStream,
  removeStream,
  playStream,
  pauseStream,
  mute,
  unMute,
  showChat,
  hideChat,
} = multiViewSlice.actions;

export const selectMultiView = (state: RootState) => state.multiView;
