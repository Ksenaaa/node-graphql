import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, Typography, useTheme } from "@mui/material";

import { FormInput } from "components/form/FormInput";
import { LOG_IN_USER } from "components/loginForm/graphql/user.mutation";
import { LogInUserSchema } from "components/loginForm/LogInUserSchema";
import { Modal } from "components/modal/Modal";
import { RouterDirection } from "models/routerDirection";
import useAuthStore from "store/authStore";

export const LoginModal = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const setUser = useAuthStore((state) => state.setUser);

    const theme = useTheme();

    const { handleSubmit, control } = useForm<z.infer<typeof LogInUserSchema>>({
        resolver: zodResolver(LogInUserSchema),
    });

    const [login] = useMutation(LOG_IN_USER, {
        onCompleted(data) {
            setUser(data.login);
        },
        onError(error) {
            console.log(error);
        },
    });

    const handleLogInUser = handleSubmit((data) => {
        login({
            variables: { dataUser: data },
        });

        nandleCloseModal();
    });

    const nandleCloseModal = () => {
        navigate(-1);
    };

    return (
        <Modal
            titleText={"Log in"}
            isOpen
            onAgree={handleLogInUser}
            onClose={nandleCloseModal}
            widthModal="300px"
        >
            <FormInput
                control={control}
                fieldName="nameOrEmail"
                fieldLabel="name or email"
            />
            <FormInput
                control={control}
                fieldName="password"
                fieldLabel="password"
            />
            <Stack sx={{ alignItems: "flex-start" }}>
                <Typography variant="caption">
                    {`If you don't have a profile: `}
                    <Link
                        to={`/${RouterDirection.REGISTER}`}
                        state={{ background: location.state.background }}
                        style={{
                            color: theme.palette.colors.green,
                            textDecoration: "none",
                        }}
                    >
                        Register
                    </Link>
                </Typography>
            </Stack>
        </Modal>
    );
};
