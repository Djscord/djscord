module.exports = {
    Codes: {
        WS: {
            Gate_Codes: {
                DISPATCH: 0,
                HEARTBEAT: 1,
                IDENTIFY: 2,
                PRESENCE_UPDATE: 3,
                VOICE_STATE_UPDATE: 4,
                RESUME: 6,
                RECONNECT: 7,
                REQUEST_GUILD_MEMBERS: 8,
                INVALID_SESSION: 9,
                HELLO: 10,
                HEARTBEAT_ACK: 11
            },
        
            Close_Codes: {
                Gateway: {
                    UNKNOWN_ERROR: 4000,
                    UNKNOWN_OPCODE: 4001,
                    DECODE_ERROR: 4002,
                    NOT_AUTHENTICATED: 4003,
                    AUTHENTICATION_FAILED: 4004,
                    ALREADY_AUTHENTICATED: 4005,
                    INVALID_SEQ: 4007,
                    RATELIMITED: 4008,
                    SESSION_TIMED_OUT: 4009,
                    INVALID_SHARD: 4010,
                    SHARDING_REQUIRED: 4011,
                    INVALID_API_VERSION: 4012,
                    INVALID_INTENTS: 4013,
                    DISALLOWED_INTENTS: 4014
                },
        
                Voice: {
                    UNKNOWN_OPCODE: 4001,
                    FAILED_TO_DECODE_PAYLOAD: 4002,
                    NOT_AUTHENTICATED: 4003,
                    AUTHENTICATION_FAILED: 4004,
                    ALREADY_AUTHENTICATED: 4005,
                    SESSION_NO_LONGER_VALID: 4006,
                    SESSION_TIMEOUT: 4009,
                    SERVER_NOT_FOUND: 4011,
                    UNKNOWN_PROTOCOL: 4012,
                    DISCONNECTED: 4014,
                    VOICE_SERVER_CRASHED: 4015,
                    UNKNOWN_ENCRYPTION_MODE: 4016
                }
            },
        
            Voice_Codes: {
                IDENTIFY: 0,
                SELECT_PROTOCOL: 1,
                READY: 2,
                HEARTBEAT: 3,
                SESSION_DESCRIPTION: 4,
                SPEAKING: 5,
                HEARTBEAT_ACK: 6,
                RESUME: 7,
                HELLO: 8,
                RESUMED: 9,
                CLIENT_DISCONNECTED: 13
            }
        
        },
    
        HTTP: {
            "OK": 200,
            "CREATED": 201,
            "NO_CONTENT": 204,
            "NOT_MODIFIED": 304,
            "BAD_REQUEST": 400,
            "UNAUTHORIZED": 401,
            "FORBIDDEN": 403,
            "NOT_FOUND": 404,
            "METHOD_NOT_ALLOWED": 405,
            "TOO_MANY_REQUESTS": 429,
            "GATEWAY_UNAVAILABLE": 502,
            "SERVER_ERROR": 503
        },
    
        JSON: {
            GENERAL_ERROR: 0,
            UNKNOWN_ACCOUNT: 10001,
            UNKNOWN_APPLICATION: 10002,
            UNKNOWN_CHANNEL: 10003,
            UNKNOWN_GUILD: 10004,
            UNKNOWN_INTEGRATION: 10005,
            UNKNOWN_INVITE: 10006,
            UNKNOWN_MEMBER: 10007,
            UNKNOWN_MESSAGE: 10008,
            UNKNOWN_PERMISSION_OVERWRITE: 10009,
            UNKNOWN_PROVIDER: 10010,
            UNKNOWN_ROLE: 10011,
            UNKNOWN_TOKEN: 10012,
            UNKNOWN_USER: 10013,
            UNKNOWN_EMOJI: 10014,
            UNKNOWN_WEBHOOK: 10015,
            UNKNOWN_BAN: 10026,
            UNKNOWN_SKU: 10027,
            UNKNOWN_STORE_LISTING: 10028,
            UNKNOWN_ENTITLEMENT: 10029,
            UNKNOWN_BUILD: 10030,
            UNKNOWN_LOBBY: 10031,
            UNKNOWN_BRANCH: 10032,
            UNKNOWN_REDISTRIBUTABLE: 10036,
            UNKNOWN_GUILD_TEMPLATE: 10057,
            
        },
    
        API: {
            Base: `https://discord.com/api`,
        },
    
        CDN: {
            Base: `https://cdn.discordapp.com`,
            Avatar: (user_id, hash, type="png") => {
                if (hash.startsWith("a_")) type = "gif"
    
                return `${module.exports.CDN.Base}/avatars/${user_id}/${hash}.${type}`;
            },
            
            Icon: (guild_id, hash, type) => {
                if (hash.startsWith("a_")) type = "gif";
    
                return `${module.exports.CDN.Base}/icons/${guild_id}/${hash}.${type}`;
            },
    
    
        }
    }
}