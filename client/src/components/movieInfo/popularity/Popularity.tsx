import { Grid, Theme, Typography } from "@mui/material";

import { Movie } from "__generated__/graphql";

interface Props {
    movie?: Movie;
}

export const Popularity = ({ movie }: Props) => {
    return (
        <Grid item sm={12} md={6}>
            <Grid
                container
                alignContent={"flex-start"}
                spacing={2}
                direction={"row"}
                sx={{ marginBottom: "20px" }}
            >
                <Grid item md={2}>
                    <Typography variant="h6" fontWeight={"bold"}>
                        IMDb:
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Grid container direction={"row"}>
                        <Typography variant="h6" fontWeight={"bold"} mr={2}>
                            {movie?.imdb?.rating}
                        </Typography>
                        <Typography
                            variant="h6"
                            color={(theme: Theme) => theme.palette.colors.grey}
                        >
                            {`(${movie?.imdb?.votes})`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                alignContent={"flex-start"}
                spacing={2}
                direction={"row"}
                sx={{ marginBottom: "20px" }}
            >
                <Grid item md={2}>
                    <Typography variant="h6" fontWeight={"bold"}>
                        Viewer:
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Grid container direction={"row"}>
                        <Typography variant="h6" fontWeight={"bold"} mr={2}>
                            {movie?.tomatoes?.viewer.rating}
                        </Typography>
                        <Typography
                            variant="h6"
                            color={(theme: Theme) => theme.palette.colors.grey}
                        >
                            {`(${movie?.tomatoes?.viewer.numReviews})`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
