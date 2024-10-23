import gql from "graphql-tag";

import Comment from "../models/commentSchema";
import Movie from "../models/movieSchema";
import { findOrConvertPosterToWebP } from "../utils/findOrConvertPosterToWebP";

export const movieTypeDefs = gql`
    input AwardsInput {
        wins: Int
        nominations: Int
        text: String
    }

    input ImdbInput {
        rating: Float
        votes: Int
        id: Int
    }

    input TomatoesViewerInput {
        rating: Float
        numReviews: Int
        meter: Int
    }

    input TomatoesInput {
        viewer: TomatoesViewerInput!
        dvd: Date
        lastUpdated: Date
    }

    input DataMovie {
        plot: String!
        genres: [String!]!
        runtime: Int!
        cast: [String!]!
        poster: String!
        title: String!
        fullplot: String!
        languages: [String!]!
        released: String!
        directors: [String!]!
        rated: String!
        awards: AwardsInput!
        lastupdated: Date!
        year: Int!
        imdb: ImdbInput!
        countries: [String!]!
        type: String!
        tomatoes: TomatoesInput!
    }

    type Awards {
        wins: Int
        nominations: Int
        text: String
    }

    type Imdb {
        rating: Float
        votes: Int
        id: Int
    }

    type TomatoesViewer {
        rating: Float
        numReviews: Int
        meter: Int
    }

    type Tomatoes {
        viewer: TomatoesViewer!
        dvd: Date
        lastUpdated: Date
    }

    type Movie {
        id: ID!
        plot: String
        genres: [String!]
        runtime: Int
        cast: [String!]
        poster: String
        posterWebp: String
        title: String
        fullplot: String
        languages: [String!]
        released: String
        directors: [String!]
        rated: String
        awards: Awards
        lastupdated: Date
        year: Int
        imdb: Imdb
        countries: [String!]
        type: String
        tomatoes: Tomatoes
        comments: [Comment!]
    }    

    type Query {
        movieById(id: ID!): Movie!
        movies: [Movie!]!
    }

    type Mutation {
        addMovie(dataMovie: DataMovie): Movie!
        updateMovie(id: ID!, updatedDataMovie: DataMovie!): Movie
        deleteMovie(id: ID!): Boolean!
    }
`;

export const movieResolvers = {
    Query: {
        movieById: async (parent, { id }) => {
            const movie = await Movie.findById({ _id: id }).exec();

            return movie;
        },
        movies: async (parent, args) => {
            let results = await Movie.find().limit(175).exec();

            return results;
        },
    },
    Mutation: {
        addMovie: async (parent, { dataMovie }) => {
            const newMovie = await Movie.create(dataMovie)

            return newMovie
        },
        updateMovie: async (parent, { id, updatedDataMovie }) => {
            try {
                const result = await Movie.findById({ _id: id })

                if (!result) {
                    throw new Error('Movie is not exist!')
                }

                await Movie.updateOne(
                    { _id: id },
                    { $set: updatedDataMovie }
                )

                const updatedMovie = await Movie.findById({ _id: id }).exec();

                return updatedMovie
            } catch (error) {
                return error
            }
        },
        deleteMovie: async (parent, { id }) => {
            try {
                const result = await Movie.findById({ _id: id })

                if (!result) {
                    throw new Error('Movie is not exist!')
                }

                await Movie.deleteOne({ _id: id })

                return true
            } catch (error) {
                return error
            }
        }
    },
    Movie: {
        id: (obj) => obj._id || obj.id,
        comments: async ({ id }, args) => {
            return await Comment.find({ movie_id: id }).exec();
        },
        posterWebp: async ({ poster, id }) => {
            if (poster) {
                let posterInWebp = await findOrConvertPosterToWebP(poster, id);
                return posterInWebp
            }
            return ''
        }
    }
}
