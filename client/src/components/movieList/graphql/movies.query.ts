import { gql } from "__generated__/gql";

export const GET_MOVIE_CARDS = gql(`
    query GetMovieCardsQuery {
        movies {
            id
            year
            title
            posterWebp
            countries
        }
    }
`);
