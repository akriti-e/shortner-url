import express from "express";
import dotenv from "dotenv"
import connectDB from "./src/config/monogo.config.js"
import short_url from "./src/routes/short_url.route.js"
import user_routes from "./src/routes/user.routes.js"
import auth_routes from "./src/routes/auth.routes.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors"
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser"
import path from "path";

dotenv.config("./.env")

const __dirname = path.resolve();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // your React app
    credentials: true // 👈 this allows cookies to be sent
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(attachUser)

app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.use("/api/create",short_url)

app.use(errorHandler)

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '/FRONTEND/dist')));

// Short URL redirect - must come AFTER static files but BEFORE catch-all
app.get("/:id",redirectFromShortUrl)

// Catch-all handler for frontend routing - must be LAST
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'FRONTEND', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
})

// GET - Redirection 
