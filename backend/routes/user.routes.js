import { Router } from "express";
import db from "../db/sqlite.js";

const router = Router();

router.post("/login", (req, res) => {
    const { name } = req.body;

    if (!name || !name.trim()) {
        return res.status(400).json({ error: "Username is required!" });
    }
    const trimmedName = name.trim();

    try {
        // Query user from SQLite
        let user = db.prepare("SELECT * FROM users WHERE name = ?").get(trimmedName);

        // If user does not exist, insert and get the new ID
        if (!user) {
            const result = db.prepare("INSERT INTO users (name) VALUES (?)").run(trimmedName);
            user = { id: Number(result.lastInsertRowid), name: trimmedName };
        }

        return res.status(200).json({ user });
    } catch (error) {
        console.error("Error saving user: ", error);
        return res.status(500).json({ error: "Server error" });
    }
});

export default router;