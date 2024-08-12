import { Grid } from "@mui/material";

import { Movie } from "__generated__/graphql";
import noImg from "assets/img/no-poster-film.png";

interface Props {
    movie?: Movie;
}

export const MovieImg = ({ movie }: Props) => {
    return (
        <Grid
            item
            sm={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
        >
            <img
                srcSet={movie?.poster ?? noImg}
                width={500}
                height={700}
                style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    height: "100%",
                    border: "1px solid grey",
                    padding: "12px",
                }}
                src={movie?.poster ?? noImg}
                alt={movie?.title ?? ""}
                loading="lazy"
            />
        </Grid>
    );
};
