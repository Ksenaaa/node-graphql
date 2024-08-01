import { useState } from "react";
import { IconButton, Menu, Theme } from "@mui/material";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
import TheatersTwoToneIcon from "@mui/icons-material/TheatersTwoTone";
import MenuIcon from "@mui/icons-material/Menu";

import { RouterDirection } from "models/routerDirection";
import { ItemLink } from "./ItemLink";

export const MenuApp = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-controls="menu-appbar"
                aria-label="menu"
                aria-haspopup="true"
                sx={{ mr: 2 }}
                onClick={handleMenu}
            >
                <MenuIcon
                    sx={{ color: (theme: Theme) => theme.palette.colors.white }}
                />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <ItemLink
                    onClickItem={handleClose}
                    to={RouterDirection.MOVIES}
                    itemText="Movies"
                >
                    <TheatersTwoToneIcon fontSize="small" />
                </ItemLink>
                <ItemLink
                    onClickItem={handleClose}
                    to={RouterDirection.USERS_CONTROL}
                    itemText="Users"
                >
                    <ManageAccountsTwoToneIcon fontSize="small" />
                </ItemLink>
            </Menu>
        </>
    );
};
