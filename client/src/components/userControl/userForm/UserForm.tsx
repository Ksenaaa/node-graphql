import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation, useQuery } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";

import { Modal } from "components/modal/Modal";
import { LoaderInBox } from "components/loader/LoaderInBox";
import { ErrorMessage } from "components/errorMessage/ErrorMessage";
import { FormInput } from "components/form/FormInput";
import { UserSchema } from "./UserSchema";
import { defaultUserForm } from "./defaultUserForm";
import { REGISTER_USER, UPDATE_USER } from "../graphql/user.mutation";
import { GET_USER_BY_ID, GET_USERS } from "../graphql/users.query";

interface Props {
    selectedUserId?: string;
    onCloseModalUser: () => void;
}

export const UserForm = ({ selectedUserId = "", onCloseModalUser }: Props) => {
    const {
        loading,
        error,
        data: user,
        refetch,
    } = useQuery(GET_USER_BY_ID, {
        variables: { userById: selectedUserId },
        skip: !selectedUserId,
        onCompleted: (res) => {
            reset({
                email: res?.userById?.email || "",
                name: res?.userById?.name || "",
                password: res?.userById?.password || "",
            });
        },
    });

    const { handleSubmit, reset, control } = useForm<
        z.infer<typeof UserSchema>
    >({
        defaultValues: defaultUserForm,
        resolver: zodResolver(UserSchema),
    });

    const [updateUser] = useMutation(UPDATE_USER, {
        errorPolicy: "all",
    });

    const [addUser] = useMutation(REGISTER_USER, {
        refetchQueries: [GET_USERS, "GetUsers"],
    });

    const handleSaveChangesUser = handleSubmit((data) => {
        if (user) {
            updateUser({
                variables: {
                    updateUserId: user.userById.id,
                    updatedDataUser: data,
                },
            });
        }

        if (!user) {
            addUser({ variables: { dataUser: data } });
        }

        onCloseModalUser();
    });

    return (
        <Modal
            titleText={
                selectedUserId
                    ? `Change user: ${user?.userById.name || ""}`
                    : "Create new user"
            }
            isOpen
            onAgree={handleSaveChangesUser}
            onClose={onCloseModalUser}
            widthModal="400px"
        >
            <FormInput control={control} fieldName="name" fieldLabel="name" />
            <FormInput control={control} fieldName="email" fieldLabel="email" />
            <FormInput
                control={control}
                fieldName="password"
                fieldLabel="password"
            />
            {loading && <LoaderInBox />}
            {error && <ErrorMessage onClick={refetch} />}
        </Modal>
    );
};
