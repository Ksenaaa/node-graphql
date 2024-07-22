import { Stack, Theme } from "@mui/material";
import { ButtonIconTooltip } from "components/buttonIconTooltip/ButtonIconTooltip";
import PersonAddAlt1TwoToneIcon from "@mui/icons-material/PersonAddAlt1TwoTone";

export const ControlButtons = () => {
    return (
        <Stack spacing={3} direction={"row"} sx={{ marginBottom: "20px" }}>
            <ButtonIconTooltip>
                <PersonAddAlt1TwoToneIcon
                    sx={{
                        fontSize: "35px",
                        color: (theme: Theme) => theme.palette.colors.green,
                    }}
                />
            </ButtonIconTooltip>
        </Stack>
    );
};
