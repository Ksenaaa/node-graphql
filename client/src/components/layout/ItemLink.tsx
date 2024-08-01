import { memo, PropsWithChildren } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon, ListItemText, Theme } from "@mui/material";

import { RouterDirection } from "models/routerDirection";

interface Props {
    onClickItem: () => void;
    to: RouterDirection;
    itemText: string;
}

export const ItemLink = memo(
    ({ onClickItem, to, itemText, children }: PropsWithChildren<Props>) => {
        let resolved = useResolvedPath(to);
        let isActive = useMatch({ path: resolved.pathname, end: true });

        return (
            <Link style={{ color: "grey", textDecoration: "none" }} to={to}>
                <MenuItem onClick={onClickItem}>
                    <ListItemIcon
                        sx={{
                            color: (theme: Theme) =>
                                isActive ? theme.palette.primary.main : "none",
                        }}
                    >
                        {children}
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            color: (theme: Theme) =>
                                isActive ? theme.palette.primary.main : "none",
                        }}
                    >
                        {itemText}
                    </ListItemText>
                </MenuItem>
            </Link>
        );
    }
);
