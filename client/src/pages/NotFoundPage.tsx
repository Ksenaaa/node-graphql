import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { ContainerMain } from "components/containerMain/ContainerMain";
import { PageTitle } from "components/pageTitle/PageTitle";
import { RouterDirection } from "models/routerDirection";

export const NotFoundPage = () => (
    <ContainerMain>
        <PageTitle title="Page not found" />
        <Link style={{ textDecoration: "none" }} to={RouterDirection.LAYOUT}>
            <Button size="large">
                <Typography>Back</Typography>
            </Button>
        </Link>
    </ContainerMain>
);
