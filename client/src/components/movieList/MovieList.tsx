import { useQuery } from "@apollo/client";
import { Paper, Stack, Theme } from "@mui/material";

import { LoaderInBox } from "components/loader/LoaderInBox";
import { ErrorMessage } from "components/errorMessage/ErrorMessage";
import { GET_MOVIE_CARDS } from "./graphql/movies.query";
import { MovieItem } from "./MovieItem";

export const MovieList = () => {
    const { loading, error, data: movies } = useQuery(GET_MOVIE_CARDS);

    if (loading) return <LoaderInBox />;
    if (error) return <ErrorMessage errorMessage={error.message} />;

    return (
        <>
            <Paper
                sx={{
                    width: "1900px",
                    maxWidth: "100%",
                    padding: "20px",
                    background: (theme: Theme) => theme.palette.primary.main,
                }}
            >
                <Stack
                    sx={{
                        flexWrap: "wrap",
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "center",
                        gap: "16px",
                    }}
                >
                    {movies?.movies.map((movie) => (
                        <MovieItem key={movie?.id} movie={movie} />
                    ))}
                </Stack>
            </Paper>
        </>
    );
};
