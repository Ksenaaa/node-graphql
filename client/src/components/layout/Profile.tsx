import { useState } from "react";
import { Theme, IconButton, Menu } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import { RouterDirection } from "models/routerDirection";

import { ItemLink } from "./ItemLink";
import useAuthStore from "store/authStore";
import { useLocation } from "react-router-dom";

export const Profile = () => {
    const isAccessAllow = useAuthStore((state) => state.isAccessAllow);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    let location = useLocation();

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
                {isAccessAllow && (
                    <>
                        <ItemLink
                            onClickItem={handleClose}
                            to={{ pathname: RouterDirection.PROFILE }}
                            itemText="Profile"
                        >
                            <PersonPinCircleTwoToneIcon fontSize="small" />
                        </ItemLink>
                        <ItemLink
                            onClickItem={handleClose}
                            to={{ pathname: RouterDirection.LAYOUT }}
                            itemText="Log out"
                        >
                            <LogoutTwoToneIcon fontSize="small" />
                        </ItemLink>
                    </>
                )}
                {!isAccessAllow && (
                    <ItemLink
                        onClickItem={handleClose}
                        to={{
                            pathname: `/${RouterDirection.LOGIN}`,
                            state: { background: location },
                        }}
                        itemText="Log in"
                    >
                        <LoginTwoToneIcon fontSize="small" />
                    </ItemLink>
                )}
            </Menu>
        </>
    );
};
