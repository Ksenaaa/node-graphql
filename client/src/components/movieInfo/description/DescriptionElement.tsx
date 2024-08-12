import { Grid, Typography } from "@mui/material";

import { Movie } from "__generated__/graphql";
import { DescriptionMovie } from "models/descriptionMovie";

interface Props {
    descriptionElement: DescriptionMovie;
    descriptionValue: Movie[keyof Movie];
}

export const DescriptionElement = ({
    descriptionElement,
    descriptionValue,
}: Props) => {
    return (
        <Grid container columns={6} spacing={2} sx={{ marginBottom: "20px" }}>
            <Grid item md={6} lg={2}>
                <Typography variant="h6" fontWeight={"bold"}>
                    {descriptionElement.title}
                </Typography>
            </Grid>
            <Grid item md={6} lg={4}>
                <Typography variant="h6">
                    {descriptionElement.format?.(descriptionValue) ??
                        descriptionValue}
                </Typography>
            </Grid>
        </Grid>
    );
};
