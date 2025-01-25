import authRoutes from './auth.routes.js';

export const route = (app) => {
    app.use('/api/auth', authRoutes);
};
