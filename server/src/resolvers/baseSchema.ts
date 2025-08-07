import gql from "graphql-tag";

export const baseTypeDefs = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }

    type PageInfo {
        totalCount: String!
        endCursor: String!
        hasNextPage: Boolean!
    }
`;
