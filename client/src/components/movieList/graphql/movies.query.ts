import { gql } from "__generated__/gql";

export const GET_MOVIE_CARDS = gql(`
    query GetMovieCardsQuery($cursor: String, $limit: Int, $offset: Int) {
        movies(cursor: $cursor, limit: $limit, offset: $offset) @connection(key: "moviesCards"){
            edges {
                node {
                    id
                    year
                    title
                    poster
                    countries
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
`);
