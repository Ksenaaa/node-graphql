import { memo } from "react";
import { NavigateFunction } from "react-router-dom";
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
    navigate: NavigateFunction;
}

export const MovieItem = memo(({ movie, navigate }: Props) => {
    const handleNavigationToItem = () => {
        navigate(movie.id);
    };
    const webpImagePath = movie?.posterWebp
        ? `${process.env.REACT_APP_URL_IMG}/${movie?.posterWebp}`
        : noImg;

    return (
        <Card sx={{ width: 350 }}>
            <CardActionArea onClick={handleNavigationToItem}>
                <CardMedia
                    component="img"
                    height="450"
                    width={"100%"}
                    srcSet={webpImagePath}
                    sx={{ objectFit: "contain", padding: "12px" }}
                    alt={movie.title || ""}
                    loading="lazy"
                />
                <CardContent sx={{ padding: "12px" }}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: (theme: Theme) => theme.palette.colors.grey,
                        }}
                    >
                        {`${movie.year} / ${movie.countries?.join(", ")}`}
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
