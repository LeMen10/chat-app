import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import asyncHandler from 'express-async-handler';

const verifyToken = asyncHandler(async (req, res, next) => {
    if (req.headers.authorization.split(" ")[1] !== "undefined") {
        const token = req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).json({ error: 'Unauthorized - Invalid Token' });

        const user = await User.findById(decoded.userId).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });

        req.user = user;
        next();
    } else {
        return res.status(401).json({
            success: false,
            mes: 'Require authentication!!!',
        });
    }
});

export default verifyToken;
