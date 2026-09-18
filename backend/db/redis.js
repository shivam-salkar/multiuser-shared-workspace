import Redis from "ioredis";

export const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT || 6379,
  lazyConnect: true,
});

redis.connect().then(() => {
  console.log("Connected to Redis!");
}).catch((err) => {
  console.warn("Redis connection warning (ensure Redis server is running)...", err.message);
});