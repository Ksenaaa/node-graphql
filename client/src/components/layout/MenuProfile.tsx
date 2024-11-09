import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Theme, IconButton, Menu } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";

import useAuthStore from "store/authStore";
import { RouterDirection } from "models/routerDirection";
import { ItemLink } from "./ItemLink";
import { LOG_OUT_USER } from "./graphql/userLogout.mutation";

export const MenuProfile = () => {
    const isAccessAllow = useAuthStore((state) => state.isAccessAllow);
    const onLogoutUser = useAuthStore((state) => state.clearAuth);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const location = useLocation();

    const [logout] = useMutation(LOG_OUT_USER, {
        onCompleted() {
            onLogoutUser();
        },
        onError(error) {
            console.log(error);
        },
    });

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        logout();
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
                    isVisible={isAccessAllow}
                    onClickItem={handleClose}
                    to={{ pathname: RouterDirection.PROFILE }}
                    itemText="Profile"
                >
                    <PersonPinCircleTwoToneIcon fontSize="small" />
                </ItemLink>
                <ItemLink
                    isVisible={isAccessAllow}
                    onClickItem={handleLogOut}
                    to={{ pathname: RouterDirection.LAYOUT }}
                    itemText="Log out"
                >
                    <LogoutTwoToneIcon fontSize="small" />
                </ItemLink>
                <ItemLink
                    isVisible={!isAccessAllow}
                    onClickItem={handleClose}
                    to={{
                        pathname: RouterDirection.LOGIN,
                        state: { background: location },
                    }}
                    itemText="Log in"
                >
                    <LoginTwoToneIcon fontSize="small" />
                </ItemLink>
            </Menu>
        </>
    );
};
