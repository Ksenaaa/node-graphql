import { Request } from 'express';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

import { ResponseExtension, StatusCode } from '../constants/statusCode';

export const authMiddleware = async (req: Request) => {
    try {
        if (!req?.headers?.authorization) {
            throw new Error("Authentication required!");
        }

        const authParts = req?.headers?.authorization.split(" ") || '';

        const bearer = authParts[0];
        const token = authParts[1];

        if (bearer !== "Bearer") {
            throw new Error("Authentication must use Bearer!");
        }

        if (!token) {
            throw new Error("No token provided!");
        }

        const decodedUser = jwt.verify(token, process.env.JWT_SECRET);

        return decodedUser;
    } catch (err) {
        throw new GraphQLError(`Authentication failed: ${err.message}`, {
            extensions: ResponseExtension[StatusCode.UNAUTHORIZED],
        });
    }
};
