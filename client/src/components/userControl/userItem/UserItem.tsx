import { memo } from "react";
import { useMutation } from "@apollo/client";
import { Paper, Stack, Theme, Typography } from "@mui/material";
import PersonPinTwoToneIcon from "@mui/icons-material/PersonPinTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

import { ButtonIconTooltip } from "components/buttonIconTooltip/ButtonIconTooltip";
import { LoaderInBox } from "components/loader/LoaderInBox";
import { ErrorMessage } from "components/errorMessage/ErrorMessage";
import { Modal } from "components/modal/Modal";
import { useToggle } from "utils/helpers/useToggle";
import { DELETE_USER } from "../graphql/user.mutation";
import { GET_USERS } from "../graphql/users.query";
import { User } from "__generated__/graphql";

interface Props {
    user: User;
    onChange: (user: User) => void;
}

export const UserItem = memo(({ user, onChange }: Props) => {
    const [deleteUser, { loading, error }] = useMutation(DELETE_USER, {
        errorPolicy: "none",
        refetchQueries: [GET_USERS, "GetUsers"],
    });

    const {
        isOpen: isOpenModalConfirmationDelete,
        onToggle: onToggleModalConfirmationDelete,
    } = useToggle();

    const handleChangeUser = () => {
        onChange(user);
    };

    const handleDeleteUser = () => {
        deleteUser({ variables: { userId: user.id } });
        onToggleModalConfirmationDelete();
    };

    return (
        <>
            <Paper
                sx={{
                    padding: "10px 20px",
                    overflow: "hidden",
                    wordBreak: "break-all",
                }}
                elevation={3}
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                >
                    <Stack>
                        <Typography variant="body1" fontWeight={"bold"}>
                            {user.name}
                        </Typography>
                        <Typography variant="body2">{user.email}</Typography>

                        {error && <ErrorMessage />}
                    </Stack>

                    <Stack
                        direction={"row"}
                        spacing={3}
                        alignItems={"center"}
                        marginLeft={"auto"}
                    >
                        <ButtonIconTooltip onClick={handleChangeUser}>
                            <PersonPinTwoToneIcon sx={{ fontSize: "30px" }} />
                        </ButtonIconTooltip>
                        <ButtonIconTooltip
                            onClick={onToggleModalConfirmationDelete}
                        >
                            {loading ? (
                                <LoaderInBox size="23px" />
                            ) : (
                                <DeleteForeverTwoToneIcon
                                    sx={{
                                        fontSize: "30px",
                                        color: (theme: Theme) =>
                                            theme.palette.colors.red,
                                    }}
                                />
                            )}
                        </ButtonIconTooltip>
                    </Stack>
                </Stack>
            </Paper>
            {isOpenModalConfirmationDelete && (
                <Modal
                    titleText="Delete user"
                    contentText={`Are you sure you want to delete user: ${user?.name}?`}
                    isOpen={isOpenModalConfirmationDelete}
                    onAgree={handleDeleteUser}
                    onClose={onToggleModalConfirmationDelete}
                ></Modal>
            )}
        </>
    );
});
