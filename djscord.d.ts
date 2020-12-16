declare module "djscord" {
    import { EventEmitter } from "events";
    import * as WebSocket from 'ws';

    export class Client extends EventEmitter {
        constructor(options: ClientOptions);

        public readonly token: string;
        public ws: {
            socket: WebSocket;
            heartbeat: {
                interval: number
            }
        };
        public user: ClientUser;
        public users: DataStore;
        public guilds: DataStore;
        public channels: DataStore;
        public readyAt: number;
        public options: ClientOptions;


        public on<K extends keyof GatewayEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
        public once<K extends keyof GatewayEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
        public start(): void;

    }

    export class DjscordStore extends Map {
        constructor(iterable: Map|Object|Array, client: Client);
    }

    export class UserManager {

    }

    export class GuildManager {

    }

    export class ChannelManager {
        
    }

    export class ClientUser extends User {
        constructor(obj: object, client: Client);

        public setAvatar(avatar: string): ClientUser;


    }

    export class User {
        constructor(obj: object, client: Client);

        public id: string;
        public username: string;
        public avatarURL(options: AvatarOptions): string;
        public avatar: string;
        public send(content: string): Message;
    }

    export class Message {
        constructor(obj: object, client: Client);

        public content: string;
        public author: User;
        public tts: boolean;
        public channel: TextChannel | VoiceChannel;

        public delete(time: number): Promise<null>;
        public reply(content: string): Promise<Message>;
    }

    export class Base {
        constructor(obj: object, client: Client);

        public readonly client: Client;
        public toJSON(): object;
        public valueOf(): string;
    }

    export class TextChannel extends BaseChannel {
        constructor(obj: object, client: Client);

    }

    export class VoiceChannel extends BaseChannel {
        constructor(obj: object, client: Client);


    }

    class BaseChannel extends Base {
        constructor(obj: object, client: Client);

        public type: ChannelType;

    }

    interface ClientOptions {
        intents: number;
        token: string;
    }

    interface AvatarOptions {
        public type: string;
        public dynamic: string;
        public size: ImageSize;
    }

    interface GatewayEvents {
        ready: [Client];
        message: [Message];


    }

    type ClientPresenceStatus = 'online' | 'idle' | 'dnd';

    type ImageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;

    type ChannelType = "text" | "voice" | "dm" | "announcement" | "news" | "store";

} 