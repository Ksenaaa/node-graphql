import { Grid } from "@mui/material";

import { Movie } from "__generated__/graphql";
import { Description } from "./description/Description";
import { MovieImg } from "./movieImg/MovieImg";
import { Popularity } from "./popularity/Popularity";
import { Plot } from "./plot/Plot";

interface Props {
    movie?: Movie;
}

export const MovieInfo = ({ movie }: Props) => {
    return (
        <Grid
            container
            columns={12}
            spacing={2}
            sx={{
                marginBottom: "20px",
                width: "1400px",
                maxWidth: "100%",
                alignItems: "flex-start",
                justifyContent: "center",
            }}
        >
            <Grid item sm={12} md={6}>
                <Grid
                    container
                    spacing={2}
                    direction={"column"}
                    sx={{ alignContent: "flex-start" }}
                >
                    <MovieImg movie={movie} />
                    <Popularity movie={movie} />
                </Grid>
            </Grid>

            <Description movie={movie} />

            <Plot movie={movie} />
        </Grid>
    );
};
