import { PropsWithChildren } from "react";
import { Box, styled } from "@mui/material";

export const ContainerMain = ({ children }: PropsWithChildren) => {
    return <StyledContainer component="main">{children}</StyledContainer>;
};

export const StyledContainer = styled(Box)(({ theme }) => {
    return {
        width: "100%",
        height: "100%",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "94px 65px 30px",
        overflow: "scroll",
        [theme.breakpoints.down("sm")]: {
            padding: "80px 8px 30px",
        },
    };
});
