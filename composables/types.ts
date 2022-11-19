import type { GatewayActivity } from 'discord-api-types/v10';

export interface LanyardUser {
	spotify: {
        timestamps: {
            start: number;
            end: number;
        };
            song: string;
            artist: string;
            album_art_url: string;
            album: string;
            track_id: string;
    	} | null;
	listening_to_spotify: boolean;
	kv: {};
	discord_user: DiscordUser;
	discord_status: Status;
	activities: GatewayActivity[];
	active_on_discord_web: boolean;
	active_on_discord_mobile: boolean;
	active_on_discord_desktop: boolean;
}

export interface DiscordUser {
	username: string;
	public_flags: number;
	id: string;
	discriminator: string;
	bot: boolean;
	avatar: string;
}

export type Status = 'online' | 'idle' | 'dnd' | 'offline';

export enum LanyardOpcode {
	Event,
	Hello,
	Initialize,
	Heartbeat
}

export type LanyardIncomingPayload = LanyardEventInitStatePayload | LanyardEventPresenceUpdatePayload | LanyardHelloPayload;

interface LanyardEventInitStatePayload {
	op: LanyardOpcode.Event;
	seq: number;
	t: 'INIT_STATE';
	d: LanyardUser;
}

interface LanyardEventPresenceUpdatePayload {
	op: LanyardOpcode.Event;
	seq: number;
	t: 'INIT_STATE';
	d: LanyardUser;
}

interface LanyardHelloPayload {
	op: LanyardOpcode.Hello;
	d: { heartbeat_interval: number };
}
