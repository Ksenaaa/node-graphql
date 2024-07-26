import Comment from "../models/commentSchema.ts";
import User from "../models/userSchema.ts";

export const userTypeDefs = `
    input CreateUser {
        name: String
        email: String
        password: String
    }

    input UpdateUser {
        name: String
        email: String
    }

    type User {
        id: ID!
        name: String
        email: String
        password: String,
        comments: [Comment]
    }    

    type Query {
        userById(id: ID!): User
        users: [User]
    }

    type Mutation {
        addUser(dataUser: CreateUser): User!
        updateUser(id: ID!, updatedDataUser: UpdateUser!): User
        deleteUser(id: ID!): Boolean!
    }
`;

export const userResolvers = {
    Query: {
        userById: async (parent, { id }) => {
            const user = await User.findById({ _id: id }).exec();
            return user;
        },
        users: async (parent, args) => {
            let results = await User.find({}).limit(3).exec();
            return results;
        },
    },
    Mutation: {
        addUser: async (parent, { dataUser }) => {
            const newUser = await User.create(dataUser)
            return newUser
        },
        updateUser: async (parent, { id, updatedDataUser }) => {
            const update = await User.updateOne(
                { _id: id },
                { $set: updatedDataUser }
            )

            if (update.modifiedCount) {
                const updatedUser = await User.findById({ _id: id }).exec();
                return updatedUser
            }
            return false
        },
        deleteUser: async (parent, { id }) => {
            const result = await User.deleteOne({ _id: id })

            if (result.deletedCount) {
                return true
            }

            return false
        }
    },
    User: {
        id: (obj) => obj._id || obj.id,
        comments: async ({ email }, args) => {
            return await Comment.find({ email }).exec();
        },
    },
}
