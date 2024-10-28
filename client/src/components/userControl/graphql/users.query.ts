import { gql } from "__generated__";

export const GET_USERS = gql(`
    query GetUsers($cursor: String, $limit: Int, $offset: Int) {
        users(cursor: $cursor, limit: $limit, offset: $offset) @connection(key: "usersCards") {
            edges {
                node {
                    id
                    name
                    email
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
`);

export const GET_USER_BY_ID = gql(`
    query UserById($userById: ID!) {
        userById(id: $userById) {
            id
            name
            email
            password
            comments {
                id
                email
                movie_id
                text
                date
            }
        }
    }
`);
