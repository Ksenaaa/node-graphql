import { Grid, Theme, Typography } from "@mui/material";

import { Movie } from "__generated__/graphql";

interface Props {
    movie?: Movie;
}

export const Plot = ({ movie }: Props) => {
    return (
        <Grid item md={12}>
            <Typography
                variant="h5"
                fontWeight={"bold"}
                sx={{
                    borderBottomColor: (theme: Theme) =>
                        theme.palette.colors.grey,
                    borderBottomStyle: "solid",
                    borderBottomWidth: "1px",
                    marginBottom: "28px",
                }}
            >
                Plot:
            </Typography>
            <Typography variant="h6">{movie?.fullplot}</Typography>
        </Grid>
    );
};
