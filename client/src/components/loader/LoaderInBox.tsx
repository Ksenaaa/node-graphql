import { Box, CircularProgress, Theme } from "@mui/material";

interface Props {
    size?: string;
}

export const LoaderInBox = ({ size }: Props) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress
                disableShrink
                size={size}
                sx={{ color: (theme: Theme) => theme.palette.primary.main }}
            />
        </Box>
    );
};
