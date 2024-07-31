import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Stack, Theme, Typography } from "@mui/material";

interface Props {
    errorMessage: string;
}

export const ErrorMessage = ({ errorMessage }: Props) => {
    return (
        <Stack sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <InfoOutlinedIcon
                sx={{
                    color: (theme: Theme) => theme.palette.colors.red,
                }}
            />
            <Typography
                variant="h5"
                color={(theme: Theme) => theme.palette.colors.red}
            >
                {errorMessage}
            </Typography>
        </Stack>
    );
};
