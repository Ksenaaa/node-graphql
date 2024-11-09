import { AppBar, Theme, Toolbar, Typography } from "@mui/material";

import useAuthStore from "store/authStore";
import { MenuApp } from "./MenuApp";
import { MenuProfile } from "./MenuProfile";

export const Header = () => {
    const user = useAuthStore((state) => state.user);

    return (
        <AppBar position="fixed">
            <Toolbar>
                <MenuApp />
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        color: (theme: Theme) => theme.palette.colors.white,
                    }}
                >
                    Movies App
                </Typography>
                {user?.name && (
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            color: (theme: Theme) => theme.palette.colors.white,
                            marginRight: "1rem",
                            textAlign: "end",
                        }}
                    >
                        {user?.name}
                    </Typography>
                )}
                <MenuProfile />
            </Toolbar>
        </AppBar>
    );
};
