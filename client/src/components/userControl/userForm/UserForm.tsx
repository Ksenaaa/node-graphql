import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation, useQuery } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomInput } from "components/customInput/CustomInput";
import { Modal } from "components/modal/Modal";
import { LoaderInBox } from "components/loader/LoaderInBox";
import { ErrorMessage } from "components/errorMessage/ErrorMessage";
import { UserSchema } from "./UserSchema";
import { defaultUserForm } from "./defaultUserForm";
import { REGISTER_USER, UPDATE_USER } from "../graphql/user.mutation";
import { GET_USER_BY_ID, GET_USERS } from "../graphql/users.query";

interface Props {
    selectedUserId: string;
    isOpenModalUser: boolean;
    onCloseModalUser: () => void;
}

export const UserForm = ({
    selectedUserId,
    isOpenModalUser,
    onCloseModalUser,
}: Props) => {
    const {
        loading,
        error,
        data: user,
        refetch,
    } = useQuery(GET_USER_BY_ID, {
        variables: { userById: selectedUserId },
        skip: !selectedUserId,
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
        watch,
    } = useForm<z.infer<typeof UserSchema>>({
        defaultValues: defaultUserForm,
        resolver: zodResolver(UserSchema),
    });

    const watchName = watch("name");
    const watchEmail = watch("email");
    const watchPassword = watch("password");

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
            addUser({
                variables: { dataUser: data },
            });
        }

        onCloseModalUser();
    });

    console.log(user);

    useEffect(() => {
        if (user?.userById) {
            reset({
                email: user?.userById?.email || "",
                name: user?.userById?.name || "",
                password: user?.userById?.password || "",
            });
        }
    }, [user?.userById, reset]);

    return (
        <Modal
            titleText={
                user ? `Change user: ${user?.userById.name}` : "Create new user"
            }
            isOpen={isOpenModalUser}
            onAgree={handleSaveChangesUser}
            onClose={onCloseModalUser}
        >
            {loading && <LoaderInBox />}
            {error && <ErrorMessage onClick={refetch} />}
            <CustomInput
                name="name"
                label="name"
                errorText={errors.name?.message}
                register={register("name")}
                inputLabelProps={{ shrink: !!watchName }}
            />
            <CustomInput
                name="email"
                label="email"
                errorText={errors.email?.message}
                register={register("email")}
                inputLabelProps={{ shrink: !!watchEmail }}
            />
            <CustomInput
                name="password"
                label="password"
                isMultiline
                errorText={errors.password?.message}
                register={register("password")}
                inputLabelProps={{ shrink: !!watchPassword }}
            />
        </Modal>
    );
};
