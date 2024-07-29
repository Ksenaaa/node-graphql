import { Paper, Stack, Theme, Typography } from "@mui/material";
import PersonPinTwoToneIcon from "@mui/icons-material/PersonPinTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

import { ButtonIconTooltip } from "components/buttonIconTooltip/ButtonIconTooltip";
import { User } from "models/User";

interface Props {
    user: User;
}

export const UserItem = ({ user }: Props) => {
    return (
        <Paper sx={{ padding: "10px 20px" }} elevation={3}>
            <Stack
                direction={"row"}
                spacing={3}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Stack>
                    <Typography variant="body1" fontWeight={"bold"}>
                        {user.name}
                    </Typography>
                    <Typography variant="body2">{user.email}</Typography>
                </Stack>

                <Stack direction={"row"} spacing={3} alignItems={"center"}>
                    <ButtonIconTooltip>
                        <PersonPinTwoToneIcon />
                    </ButtonIconTooltip>
                    <ButtonIconTooltip>
                        <DeleteForeverTwoToneIcon
                            sx={{
                                color: (theme: Theme) =>
                                    theme.palette.colors.red,
                            }}
                        />
                    </ButtonIconTooltip>
                </Stack>
            </Stack>
        </Paper>
    );
};
