import React, { MouseEvent, PropsWithChildren } from "react";
import { IconButton, SxProps, Theme, Tooltip } from "@mui/material";

interface Props {
    tooltipTitle?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    sx?: SxProps;
    disabled?: boolean;
}

export const ButtonIconTooltip = ({
    tooltipTitle,
    onClick,
    children,
    sx,
    disabled,
}: PropsWithChildren<Props>) => {
    return (
        <Tooltip title={tooltipTitle}>
            <IconButton
                color="inherit"
                onClick={onClick}
                sx={{
                    pointerEvents: disabled ? "none" : undefined,
                    color: (theme: Theme) =>
                        disabled
                            ? theme.palette.colors.grey
                            : theme.palette.primary.main,
                    ...sx,
                }}
            >
                {children}
            </IconButton>
        </Tooltip>
    );
};
