import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const token = req.header('Bearer: ');

    console.log('token Bearer', token)

    if (!token) {
        throw new Error('No token, authorization denied!');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //req.user = decoded?.user;
        next();
    } catch (err) {
        throw new Error(`Invalid Token: ${err}`);
    }
};
