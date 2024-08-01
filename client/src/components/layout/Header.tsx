import { AppBar, Theme, Toolbar, Typography } from "@mui/material";

import { MenuApp } from "./MenuApp";
import { Profile } from "./Profile";

export const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <MenuApp />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        color: (theme: Theme) => theme.palette.colors.white,
                    }}
                >
                    Movies App
                </Typography>
                <Profile />
            </Toolbar>
        </AppBar>
    );
};
