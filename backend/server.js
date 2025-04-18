import express from 'express';
import dotenv from 'dotenv';
import { app, server } from './socket/socket.js';
import cookieParser from 'cookie-parser';
import connectToMongoDB from './db/connectToMongoDB.js';
import {route} from './routes/index.js';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(cors());

route(app);

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
