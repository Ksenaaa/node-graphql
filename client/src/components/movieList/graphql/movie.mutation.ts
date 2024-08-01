import { gql } from "__generated__/gql";

export const DELETE_MOVIE = gql(`
    mutation DeleteMovie($deleteMovieId: ID!) {
        deleteMovie(id: $deleteMovieId)
    }
`);

export const CREATE_MOVIE = gql(`
    mutation CreateMovie($dataMovie: DataMovie) {
        addMovie(dataMovie: $dataMovie) {
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

export const UPDATE_MOVIE = gql(`
    mutation UpdateMovie($updateMovieId: ID!, $updatedDataMovie: DataMovie!) {
        updateMovie(id: $updateMovieId, updatedDataMovie: $updatedDataMovie) {
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
