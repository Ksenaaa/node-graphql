import { Stack, Theme } from "@mui/material";
import PersonAddAlt1TwoToneIcon from "@mui/icons-material/PersonAddAlt1TwoTone";

import { ButtonIconTooltip } from "components/buttonIconTooltip/ButtonIconTooltip";

interface Props {
    onCreateUser: () => void;
}

export const ControlButtons = ({ onCreateUser }: Props) => {
    return (
        <Stack spacing={3} direction={"row"} sx={{ marginBottom: "20px" }}>
            <ButtonIconTooltip onClick={onCreateUser}>
                <PersonAddAlt1TwoToneIcon
                    sx={{
                        fontSize: "35px",
                        color: (theme: Theme) => theme.palette.colors.white,
                    }}
                />
            </ButtonIconTooltip>
        </Stack>
    );
};
