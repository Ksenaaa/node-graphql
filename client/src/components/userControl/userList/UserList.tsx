import { useCallback, useState } from "react";
import { useQuery } from "@apollo/client";
import { Paper, Stack, Theme } from "@mui/material";

import { User } from "models/User";
import { LoaderInBox } from "components/loader/LoaderInBox";
import { ErrorMessage } from "components/errorMessage/ErrorMessage";
import { useToggle } from "utils/helpers/toggleHook";
import { UserItem } from "../userItem/UserItem";
import { ControlButtons } from "../controlButtons/ControlButtons";
import { GET_USERS } from "../graphql/users.query";
import { UserForm } from "../userForm/UserForm";

export const UserList = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const { loading, error, data: users } = useQuery(GET_USERS);

    const { isOpen: isOpenModalUser, onToggle: onToggleModalUser } =
        useToggle();

    const handleCloseModalUser = () => {
        setSelectedUser(null);
        onToggleModalUser();
    };

    const handleChangeUser = useCallback(
        (user: User) => {
            setSelectedUser(user);
            onToggleModalUser();
        },
        [onToggleModalUser]
    );

    if (loading) return <LoaderInBox />;
    if (error) return <ErrorMessage errorMessage={error.message} />;

    return (
        <>
            <Paper
                sx={{
                    width: "700px",
                    maxWidth: "100%",
                    margin: "0 auto",
                    padding: "20px 30px",
                    background: (theme: Theme) => theme.palette.primary.main,
                }}
            >
                <ControlButtons onCreateUser={onToggleModalUser} />
                <Stack spacing={3}>
                    {users?.users.map((user) => (
                        <UserItem
                            key={user?.id}
                            user={user}
                            onChange={handleChangeUser}
                        />
                    ))}
                </Stack>
            </Paper>
            {isOpenModalUser && (
                <UserForm
                    selectedUser={selectedUser}
                    isOpenModalUser={isOpenModalUser}
                    onCloseModalUser={handleCloseModalUser}
                />
            )}
        </>
    );
};
