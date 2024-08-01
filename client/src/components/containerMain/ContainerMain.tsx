import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const ContainerMain = ({ children }: PropsWithChildren) => {
    return (
        <Box
            component="main"
            sx={{
                width: "100%",
                height: "100%",
                minHeight: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "94px 65px 30px",
            }}
        >
            {children}
        </Box>
    );
};
