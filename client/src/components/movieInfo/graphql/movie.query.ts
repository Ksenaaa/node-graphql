import { gql } from "__generated__/gql";

export const GET_MOVIE_BY_ID = gql(`
    query MovieById($movieByIdId: ID!) {
        movieById(id: $movieByIdId) {
            id
            plot
            genres
            runtime
            cast
            poster
            title
            fullplot
            languages
            released
            directors
            rated
            awards {
                nominations
                text
                wins
            }
            lastupdated
            year
            imdb {
                id
                rating
                votes
            }
            countries
            type
            tomatoes {
                dvd
                lastUpdated
                viewer {
                    meter
                    numReviews
                    rating
                }
            }
        }
    }
`);
