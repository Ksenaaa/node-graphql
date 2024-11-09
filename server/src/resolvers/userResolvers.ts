import gql from "graphql-tag";
import bcrypt from "bcrypt";
import Comment from "../models/commentSchema";
import User from "../models/userSchema";
import jwt from 'jsonwebtoken'

export const userTypeDefs = gql`
    type AuthPayload {
        token: String!
        user: User!
    }

    type ResponseIsSuccess { 
        success: Boolean!
    }

    input LoginData {
        nameOrEmail: String!
        password: String!
    }

    input CreateDataUser {
        name: String!
        email: String!
        password: String!
    }

    input UpdateUser {
        name: String!
        email: String!
        password: String!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        password: String
        comments: [Comment!]
    }    

    type PageInfo {
        totalCount: String!
        endCursor: String!
        hasNextPage: Boolean!
    }

    type PaginationUsersResult {
        edges: UsersResult!
        pageInfo: PageInfo!
    }
        
    type UsersResult {
        node: [User!]!
    }

    type Query {
        userById(id: ID!): User!
        users(cursor: String, limit: Int, offset: Int): PaginationUsersResult!
    }

    type Mutation {
        login(dataUser: LoginData!): AuthPayload!
        logout: ResponseIsSuccess!
        registerUser(dataUser: CreateDataUser!): User!
        updateUser(id: ID!, updatedDataUser: UpdateUser!): User
        deleteUser(id: ID!): ResponseIsSuccess!
    }
`;

export const userResolvers = {
    Query: {
        userById: async (parent, { id }) => {
            try {
                const user = await User.findById({ _id: id }).exec();

                if (!user) {
                    throw new Error('User is not exist!')
                }

                return user;
            } catch (error) {
                return error
            }
        },
        users: async (parent, args) => {
            try {
                const { limit = 10, offset = 0 } = args

                let totalCount = (await User.countDocuments()).toString()
                let results = await User.find().skip(offset).limit(limit).exec();
                let findNextPage = await User.find().skip(offset + limit).limit(1).exec();

                return {
                    edges: {
                        node: results
                    },
                    pageInfo: {
                        totalCount,
                        endCursor: results[results?.length - 1].id || '',
                        hasNextPage: !!findNextPage.length
                    }
                }
            } catch (error) {
                return error
            }
        },
    },
    Mutation: {
        login: async (parent, { dataUser }) => {
            try {
                let user = null
                const findUserName = await User.findOne({ name: dataUser.nameOrEmail })
                const findUserEmail = await User.findOne({ email: dataUser.nameOrEmail })

                if (!findUserName && !findUserEmail) {
                    throw new Error(`Invalid user name or email!`);
                }

                user = findUserName || findUserEmail

                const isMatchPassword = await bcrypt.compare(dataUser.password, user.password);

                if (!isMatchPassword) {
                    throw new Error(`Invalid password!`);
                }

                const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

                return {
                    token,
                    user,
                }
            } catch (error) {
                throw new Error(`User login failed: ${error}`);
            }
        },
        logout: async (parent, args) => {
            return { success: true }
        },
        registerUser: async (parent, { dataUser }) => {
            try {
                const findExistingUserName = await User.findOne({ name: dataUser.name })
                const findExistingUserEmail = await User.findOne({ email: dataUser.email })

                if (findExistingUserName) {
                    throw new Error(`User with this name already exists!`);
                }
                if (findExistingUserEmail) {
                    throw new Error(`User with this email already exists!`);
                }

                const password = await bcrypt.hash(dataUser.password, 10)

                const newUser = await User.create({ ...dataUser, password });

                return newUser;
            } catch (error) {
                throw new Error(`User creation failed: ${error}`);
            }
        },
        updateUser: async (parent, { id, updatedDataUser }) => {
            try {
                const result = await User.findById({ _id: id })

                if (!result) {
                    throw new Error('User is not exist!')
                }

                const updatedUser = await User.updateOne(
                    { _id: id },
                    { $set: updatedDataUser }
                )

                return updatedUser.modifiedCount
            } catch (error) {
                throw new Error(`User updating failed: ${error}`);
            }
        },
        deleteUser: async (parent, { id }) => {
            try {
                const result = await User.findById({ _id: id })

                if (!result) {
                    throw new Error('User is not exist!')
                }

                await User.deleteOne({ _id: id })

                return { success: true }
            } catch (error) {
                throw new Error(`User deleting failed: ${error}`);
            }
        }
    },
    User: {
        id: (obj) => obj._id || obj.id,
        comments: async ({ email }, args) => {
            return await Comment.find({ email }).exec();
        },
    },
}
