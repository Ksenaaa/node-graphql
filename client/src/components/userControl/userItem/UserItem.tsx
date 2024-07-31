import { memo } from "react";
import { useMutation } from "@apollo/client";
import { Paper, Stack, Theme, Typography } from "@mui/material";
import PersonPinTwoToneIcon from "@mui/icons-material/PersonPinTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

import { ButtonIconTooltip } from "components/buttonIconTooltip/ButtonIconTooltip";
import { LoaderInBox } from "components/loader/LoaderInBox";
import { Modal } from "components/modal/Modal";
import { User } from "models/User";
import { useToggle } from "utils/helpers/toggleHook";
import { DELETE_USER } from "../graphql/user.mutation";
import { DeleteUserMutation } from "__generated__/graphql";

interface Props {
    user: User;
    onChange: (user: User) => void;
}

export const UserItem = memo(({ user, onChange }: Props) => {
    const [deleteUser, { loading }] =
        useMutation<DeleteUserMutation>(DELETE_USER);

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
                        <ButtonIconTooltip onClick={handleChangeUser}>
                            <PersonPinTwoToneIcon />
                        </ButtonIconTooltip>
                        <ButtonIconTooltip
                            onClick={onToggleModalConfirmationDelete}
                        >
                            {loading ? (
                                <LoaderInBox size="23px" />
                            ) : (
                                <DeleteForeverTwoToneIcon
                                    sx={{
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
