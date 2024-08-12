import { Grid } from "@mui/material";

import { titleDescription } from "../titleDescription";
import { DescriptionElement } from "./DescriptionElement";
import { Movie } from "__generated__/graphql";

interface Props {
    movie?: Movie;
}

export const Description = ({ movie }: Props) => {
    return (
        <Grid item sm={12} md={6}>
            <Grid container columns={6} alignContent={"flex-start"}>
                {titleDescription.map((descriptionElement) => (
                    <DescriptionElement
                        key={descriptionElement.id}
                        descriptionElement={descriptionElement}
                        descriptionValue={
                            movie?.[descriptionElement.id as keyof Movie]
                        }
                    />
                ))}
            </Grid>
        </Grid>
    );
};
