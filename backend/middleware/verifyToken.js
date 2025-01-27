import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import asyncHandler from 'express-async-handler';

// const protectRoute = async (req, res, next) => {
//     try {
//         const token = req.cookies.jwt;
//         if (!token) return res.status(401).json({ error: 'Unauthorized - No Token Provided' });

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         if (!decoded) return res.status(401).json({ error: 'Unauthorized - Invalid Token' });

//         const user = await User.findById(decoded.userId).select('-password');
//         if (!user) return res.status(404).json({ error: 'User not found' });

//         req.user = user;
//         next();
//     } catch (error) {
//         console.log('Error in protectRoute middleware: ', error.message);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

const verifyToken = asyncHandler(async (req, res, next) => {
    if (req?.headers?.authorization?.startsWith('Bearer')) {
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
