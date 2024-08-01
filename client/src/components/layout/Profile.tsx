import { useState } from "react";
import { Theme, IconButton, Menu } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";

import { RouterDirection } from "models/routerDirection";
import { ItemLink } from "./ItemLink";

export const Profile = () => {
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
                aria-label="account of current user"
                aria-controls="menu-account"
                aria-haspopup="true"
                onClick={handleMenu}
            >
                <AccountCircle
                    sx={{ color: (theme: Theme) => theme.palette.colors.white }}
                />
            </IconButton>
            <Menu
                id="menu-account"
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
                    to={RouterDirection.PROFILE}
                    itemText="Profile"
                >
                    <PersonPinCircleTwoToneIcon fontSize="small" />
                </ItemLink>
                <ItemLink
                    onClickItem={handleClose}
                    to={RouterDirection.LOGIN}
                    itemText="Exit"
                >
                    <LogoutTwoToneIcon fontSize="small" />
                </ItemLink>
            </Menu>
        </>
    );
};
