import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO } from "y-socket.io/dist/server";
import { redis } from "./db/redis.js";
import db from "./db/sqlite.js";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";


const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/users", userRoutes);


const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
});
const ySocketIO = new YSocketIO(io);
ySocketIO.initialize();

const port = process.env.PORT || 3000;

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "ok",
        status: "working",
        timestamp: Date.now(),
    });
});

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
