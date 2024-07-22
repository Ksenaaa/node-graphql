import { User } from "models/User";
import { UserItem } from "../userItem/UserItem";
import { Paper, Stack, Theme } from "@mui/material";
import { ControlButtons } from "../controlButtons/ControlButtons";
import { LoaderInBox } from "components/loader/LoaderInBox";

interface Props {
    users: User[];
}

export const UserList = ({ users }: Props) => {
    return (
        <Paper
            sx={{
                width: "700px",
                maxWidth: "100%",
                margin: "0 auto",
                padding: "20px 30px",
                background: (theme: Theme) => theme.palette.primary.main,
            }}
        >
            <ControlButtons />
            {users.length ? (
                <Stack spacing={3}>
                    {users.map((user) => (
                        <UserItem key={user._id} user={user} />
                    ))}
                </Stack>
            ) : (
                <Stack
                    sx={{
                        padding: "10px",
                        background: (theme: Theme) =>
                            theme.palette.colors.white,
                    }}
                >
                    <LoaderInBox />
                </Stack>
            )}
        </Paper>
    );
};
