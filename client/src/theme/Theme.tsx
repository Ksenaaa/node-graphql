import { PropsWithChildren } from "react";
import { ukUA } from "@mui/material/locale";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Theme = ({ children }: PropsWithChildren) => {
    const theme = createTheme(
        {
            palette: {
                primary: {
                    main: "#0c545a",
                },
                secondary: {
                    main: "#3d7aae",
                },
                background: {
                    paper: "#EFEFEF",
                },
                text: {
                    primary: "#3f3f3f",
                },
                colors: {
                    grey: "#969696",
                    greyLight: "#dcdcdc",
                    red: "#ff6262",
                    green: "#37a78c",
                    black: "#585858",
                    white: "#ffffff",
                },
            },
        },
        ukUA
    );

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
