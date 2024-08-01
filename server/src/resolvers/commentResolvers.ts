import gql from "graphql-tag";

import Comment from "../models/commentSchema.ts";
import User from "../models/userSchema.ts";

export const commentTypeDefs = gql`
    type Query {
        comments: [Comment!]!
    }
        
    type Comment {
        id: ID!
        email: String!
        movie_id: ID!
        text: String!
        date: String!
        user: User!
    }
`;

export const commentsResolvers = {
    Query: {
        comments: async (obj, args) => {
            const result = await Comment.find().limit(30).exec();
            return result;
        },
    },
    Comment: {
        id: (obj) => obj._id || obj.id,
        user: async ({ email }, args) => {
            const result = await User.findOne({ email });
            return result;
        },
    },
};
