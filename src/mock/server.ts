import { createServer, Model, ActiveModelSerializer } from 'miragejs';

import streamResponse from './stream';
import scheduledStreamResponse from './scheduledStream';
import channels from './channels';
import members from './members';
import { Channel, Member } from '@/store/stream/stream.types';

export function makeServer() {
  createServer({
    routes() {
      this.urlPrefix = 'https://holo.dev/api/v1';

      this.get('/lives/current', () => streamResponse);

      this.get('/lives/scheduled', () => scheduledStreamResponse);

      this.get('/members', function (this: any, schema) {
        const members = schema.all('members');
        let json = this.serialize(members);
        // 這邊多做 id 轉型的原因是 serialize 會將 id 強制轉為 string 型態
        json = json.map((member: Member) => ({
          ...member,
          id: Number(member.id),
        }));

        return json;
      });

      this.get('/channels', function (this: any, schema, request) {
        const { limit = 100, page = 1 } = request.queryParams ?? {};
        const start = (page - 1) * limit;
        const end = page * limit;
        const channels = schema.all('channels');
        const result = channels.slice(start, end);
        let json = this.serialize(result);
        // 這邊多做 id 轉型的原因是 serialize 會將 id 強制轉為 string 型態
        json.channels = json.channels.map((channel: Channel) => ({
          ...channel,
          id: Number(channel.id),
        }));
        json.total = channels.length;

        return json;
      });
    },

    models: {
      channels: Model.extend({}),
      members: Model.extend({}),
    },

    serializers: {
      application: ActiveModelSerializer.extend({}),
      members: ActiveModelSerializer.extend({
        root: false,
        embed: true,
      }),
    },

    seeds(server) {
      server.db.loadData({
        channels,
        members,
      });
    },
  });
}
