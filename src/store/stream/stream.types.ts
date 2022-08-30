export const STREAM_ACTION_TYPES = {
  REQUEST_LIVE_STREAM: 'stream/REQUEST_LIVE_STREAM',
  RECEIVE_LIVE_STREAM: 'stream/RECEIVE_LIVE_STREAM',
  REQUEST_SCHEDULED_STREAM: 'stream/REQUEST_SCHEDULED_STREAM',
  RECEIVE_SCHEDULED_STREAM: 'stream/RECEIVE_SCHEDULED_STREAM',
  FETCH_CHANNEL: 'stream/FETCH_CHANNEL',
  FETCH_MEMBER: 'stream/FETCH_MEMBER',
};

export interface Stream {
  id: number | string;
  title: string;
  room?: string;
  start_at?: string;
  duration?: string | null;
  channel_id?: number;
  created_at?: string;
  cover?: string;
  platform?: string;
  channel?: string;
  status?: string;
}

export interface Channel {
  id: number;
  channel: string;
  editor_id: number | null;
  member_id: number;
  platform_id: number;
  created_at: string;
  updated_at: string;
}

export interface Member {
  id: number;
  name: string;
  avatar: string;
  color_main: string;
  color_sub: string;
  created_at: string;
  updated_at: string;
  graduated: boolean;
}
