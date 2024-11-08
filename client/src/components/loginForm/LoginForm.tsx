import { CustomInput } from "components/customInput/CustomInput";
import { Control, useController } from "react-hook-form";
import { z } from "zod";
import { LogInUserSchema } from "./LogInUserSchema";

interface Props {
    control: Control<z.infer<typeof LogInUserSchema>>;
}

export const LoginForm = ({ control }: Props) => {
    const {
        field: fieldNameOrEmail,
        fieldState: { error: errorNameOrEmail },
    } = useController({
        name: "nameOrEmail",
        control,
    });

    const {
        field: fieldPassword,
        fieldState: { error: errorPassword },
    } = useController({
        name: "password",
        control,
    });

    return (
        <>
            <CustomInput
                {...fieldNameOrEmail}
                //name="nameOrEmail"
                label="name or email"
                // errorText={errors.nameOrEmail?.message}
                // register={register("nameOrEmail")}
            />
            <CustomInput
                {...fieldPassword}
                //name="password"
                label="password"
                // errorText={errors.password?.message}
                // register={register("password")}
            />
        </>
    );
};
