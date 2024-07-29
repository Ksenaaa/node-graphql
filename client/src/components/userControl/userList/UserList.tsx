import { useQuery } from "@apollo/client";
import { Paper, Stack, Theme } from "@mui/material";

import { User } from "models/User";
import { LoaderInBox } from "components/loader/LoaderInBox";
import { UserItem } from "../userItem/UserItem";
import { ControlButtons } from "../controlButtons/ControlButtons";
import { GET_USERS } from "../graphql/users.query";

export const UserList = () => {
    const { loading, error, data: users } = useQuery(GET_USERS);

    if (loading) return <LoaderInBox />;
    if (error) return <p>Error : {error.message}</p>;

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
            {users?.users?.length && (
                <Stack spacing={3}>
                    {users.users.map((user: User) => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </Stack>
            )}
        </Paper>
    );
};
