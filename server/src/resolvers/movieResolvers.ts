import gql from "graphql-tag";

import Comment from "../models/commentSchema";
import Movie from "../models/movieSchema";

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
        
    type PageInfo {
        totalCount: String!
        endCursor: String!
        hasNextPage: Boolean!
    }

    type PaginationMoviesResult {
        edges: MoviesResult!
        pageInfo: PageInfo!
    }
        
    type MoviesResult {
        node: [Movie!]!
    }

    type Query {
        movieById(id: ID!): Movie!
        movies(cursor: String, limit: Int, offset: Int): PaginationMoviesResult!
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
            try {
                const movie = await Movie.findById({ _id: id }).exec();

                if (!movie) {
                    throw new Error('Movie is not exist!')
                }

                return movie;
            } catch (error) {
                return error
            }
        },
        movies: async (parent, args) => {
            try {
                const { limit = 10, offset = 0 } = args

                let totalCount = (await Movie.countDocuments()).toString()
                let results = await Movie.find().skip(offset).limit(limit).exec();
                let findNextPage = await Movie.find().skip(offset + limit).limit(1).exec();

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
        addMovie: async (parent, { dataMovie }) => {
            try {
                const newMovie = await Movie.create(dataMovie)

                return newMovie
            } catch (error) {
                return error
            }
        },
        updateMovie: async (parent, { id, updatedDataMovie }) => {
            try {
                const result = await Movie.findById({ _id: id })

                if (!result) {
                    throw new Error('Movie is not exist!')
                }

                const updatedMovie = await Movie.updateOne(
                    { _id: id },
                    { $set: updatedDataMovie }
                )

                return updatedMovie.modifiedCount
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
    }
}
