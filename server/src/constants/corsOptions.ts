const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || '';

export const corsOptions = {
    origin: CLIENT_ORIGIN,
    credentials: true,
};
