import { memo } from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Theme,
    Typography,
} from "@mui/material";

import noImg from "assets/img/no-poster-film.png";
import { Movie } from "__generated__/graphql";

interface Props {
    movie: Movie;
}

export const MovieItem = memo(({ movie }: Props) => {
    return (
        <Card sx={{ width: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="450"
                    width={"100%"}
                    image={movie.poster ?? noImg}
                    sx={{ objectFit: "contain" }}
                    alt={movie.title || ""}
                />
                <CardContent sx={{ padding: "12px" }}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: (theme: Theme) => theme.palette.colors.grey,
                        }}
                    >
                        {`${movie.year} / ${movie.countries?.map(
                            (country) => " " + country
                        )}`}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: (theme: Theme) => theme.palette.colors.black,
                            fontWeight: "bold",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {movie.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});
