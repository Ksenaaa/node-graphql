import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Stack, Theme, Typography } from "@mui/material";
import { ButtonIconTooltip } from "components/buttonIconTooltip/ButtonIconTooltip";
import ReplayIcon from "@mui/icons-material/Replay";

interface Props {
    onClick?: () => void;
}

export const ErrorMessage = ({ onClick }: Props) => {
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
                Something went wrong, try again...
            </Typography>
            {onClick && (
                <ButtonIconTooltip
                    tooltipTitle="Reload page"
                    onClick={() => onClick()}
                >
                    <ReplayIcon
                        sx={{
                            fontSize: "35px",
                            color: (theme: Theme) => theme.palette.colors.green,
                        }}
                    />
                </ButtonIconTooltip>
            )}
        </Stack>
    );
};
