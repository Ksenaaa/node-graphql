import { memo, PropsWithChildren } from "react";
import { Link, Location, useMatch, useResolvedPath } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon, ListItemText, Theme } from "@mui/material";

import { RouterDirection } from "models/routerDirection";

interface Props {
    isVisible?: boolean;
    onClickItem: () => void;
    to: {
        pathname: RouterDirection | string;
        state?: { background: Location };
    };
    itemText: string;
}

export const ItemLink = memo(
    ({
        isVisible = true,
        onClickItem,
        to,
        itemText,
        children,
    }: PropsWithChildren<Props>) => {
        let resolved = useResolvedPath(to.pathname);
        let isActive = useMatch({ path: resolved.pathname, end: true });

        return (
            <>
                {isVisible && (
                    <Link
                        style={{ color: "grey", textDecoration: "none" }}
                        to={to.pathname}
                        state={to.state}
                    >
                        <MenuItem onClick={onClickItem}>
                            <ListItemIcon
                                sx={{
                                    color: (theme: Theme) =>
                                        isActive
                                            ? theme.palette.primary.main
                                            : "none",
                                }}
                            >
                                {children}
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    color: (theme: Theme) =>
                                        isActive
                                            ? theme.palette.primary.main
                                            : "none",
                                }}
                            >
                                {itemText}
                            </ListItemText>
                        </MenuItem>
                    </Link>
                )}
            </>
        );
    }
);
