import { model, Schema } from "mongoose";

const movieSchema = new Schema({
    plot: { type: String, required: true },
    genres: { type: [String], required: true },
    runtime: { type: Number, required: true },
    cast: { type: [String], required: true },
    poster: { type: String, required: true },
    title: { type: String, required: true },
    fullplot: { type: String },
    languages: { type: [String], required: true },
    released: { type: Date, required: true },
    directors: { type: [String], required: true },
    rated: { type: String, required: true },
    awards: {
        wins: { type: Number, required: true },
        nominations: { type: Number, required: true },
        text: { type: String, required: true }
    },
    lastupdated: { type: Date, required: true },
    year: { type: Number, required: true },
    imdb: {
        rating: { type: Number, required: true },
        votes: { type: Number, required: true },
        id: { type: Number, required: true },
    },
    countries: { type: [String], required: true },
    type: { type: String, required: true },
    tomatoes: {
        viewer: {
            rating: { type: Number },
            numReviews: { type: Number },
            meter: { type: Number }
        },
        dvd: { type: Date },
        lastUpdated: { type: Date }
    }
});

const Movie = model("movies", movieSchema);

export default Movie;
