import Redis from "ioredis";

export const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
  lazyConnect: true,
  enableOfflineQueue: false,
  retryStrategy(times) {
    if (times > 3) {
      console.warn("Redis: max connection retries reached. Running without Redis cache.");
      return null; 
    }
    return Math.min(times * 1000, 3000);
  },
});

redis.on("error", (err) => {
  if (err.code === "ECONNREFUSED") {
    return;
  }
  console.error("Redis error:", err.message);
});

redis.connect().then(() => {
  console.log("Connected to Redis!");
}).catch((err) => {
  console.warn("Redis connection warning (ensure Redis server is running):", err.message);
});
