import { GraphQLFormattedError } from "graphql";

export const apolloFormattedError = (err: GraphQLFormattedError) => {
    return {
        message: err.message,
        path: err.path
    };
}
