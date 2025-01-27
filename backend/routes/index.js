import authRoutes from './auth.routes.js';
import messageRoutes from './message.routes.js';
import userRoutes from './user.routes.js';
import verifyToken from '../middleware/verifyToken.js';

export const route = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/messages', messageRoutes);
    app.use('/api/users', verifyToken, userRoutes);
};
