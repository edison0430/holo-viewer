import { Stream } from '../stream/stream.types';

export interface MultiView extends Stream {
  isChatShown: Boolean;
  isPlaying: Boolean;
  isMuted: Boolean;
}
