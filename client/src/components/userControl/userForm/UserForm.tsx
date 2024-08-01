import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomInput } from "components/customInput/CustomInput";
import { Modal } from "components/modal/Modal";
import { UserSchema } from "./UserSchema";
import { defaultUserForm } from "./defaultUserForm";
import { CREATE_USER, UPDATE_USER } from "../graphql/user.mutation";
import { GET_USERS } from "../graphql/users.query";
import { User } from "__generated__/graphql";

interface Props {
    selectedUser: User | null;
    isOpenModalUser: boolean;
    onCloseModalUser: () => void;
}

export const UserForm = ({
    selectedUser,
    isOpenModalUser,
    onCloseModalUser,
}: Props) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<z.infer<typeof UserSchema>>({
        defaultValues: selectedUser ? selectedUser : defaultUserForm,
        resolver: zodResolver(UserSchema),
    });

    const [updateUser] = useMutation(UPDATE_USER, {
        errorPolicy: "all",
    });

    const [addUser] = useMutation(CREATE_USER, {
        refetchQueries: [GET_USERS, "GetUsers"],
    });

    const handleSaveChangesUser = handleSubmit((data) => {
        if (selectedUser) {
            updateUser({
                variables: {
                    updateUserId: selectedUser.id,
                    updatedDataUser: data,
                },
            });

            onCloseModalUser();
            return;
        }

        addUser({
            variables: { dataUser: data },
        });

        onCloseModalUser();
    });

    return (
        <Modal
            titleText={
                selectedUser
                    ? `Change user: ${selectedUser?.name}`
                    : "Create new user"
            }
            isOpen={isOpenModalUser}
            onAgree={handleSaveChangesUser}
            onClose={onCloseModalUser}
        >
            <CustomInput
                name="name"
                label="name"
                errorText={errors.name?.message}
                register={register("name")}
            />
            <CustomInput
                name="email"
                label="email"
                errorText={errors.email?.message}
                register={register("email")}
            />
            <CustomInput
                name="password"
                label="password"
                multiline
                errorText={errors.password?.message}
                register={register("password")}
            />
        </Modal>
    );
};
