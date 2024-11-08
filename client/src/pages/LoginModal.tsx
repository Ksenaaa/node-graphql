import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, Typography, useTheme } from "@mui/material";
import { LOG_IN_USER } from "components/loginForm/graphql/user.mutation";
import { LoginForm } from "components/loginForm/LoginForm";
import { LogInUserSchema } from "components/loginForm/LogInUserSchema";
import { Modal } from "components/modal/Modal";
import { RouterDirection } from "models/routerDirection";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useToggle } from "utils/helpers/useToggle";
import { z } from "zod";

export const LoginModal = () => {
    const { isOpen: isOpenModalLogIn, onToggle: onToggleModalLogIn } =
        useToggle(true);

    const theme = useTheme();
    const { handleSubmit, control } = useForm<z.infer<typeof LogInUserSchema>>({
        resolver: zodResolver(LogInUserSchema),
    });

    const [login] = useMutation(LOG_IN_USER);

    const handleLogInUser = handleSubmit((data) => {
        console.log(data);
        // login({
        //     variables: { dataUser: data },
        // });

        // onToggle();
    });

    return (
        <Modal
            titleText={"Log in"}
            isOpen={isOpenModalLogIn}
            onAgree={handleLogInUser}
            onClose={onToggleModalLogIn}
            widthModal="300px"
        >
            {/* {loading && <LoaderInBox />}
            {error && <ErrorMessage onClick={refetch} />} */}
            <LoginForm control={control} />
            <Stack sx={{ alignItems: "flex-start" }}>
                <Typography variant="caption">
                    {`If you don't have profile: `}
                    <Link
                        to={RouterDirection.REGISTER}
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
