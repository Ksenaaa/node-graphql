import { ChangeEventHandler, ReactNode } from "react";
import { FieldValues, UseFormRegisterReturn } from "react-hook-form";
import {
    FilledInputProps,
    FormControl,
    FormHelperText,
    InputLabelProps,
    InputProps,
    OutlinedInputProps,
    TextField,
    Theme,
} from "@mui/material";

interface Props {
    name: string;
    type?: string;
    value?: string | number;
    label: string;
    placeholder?: string;
    multiline?: boolean;
    onChangeValue?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    errorText?: string;
    field?: FieldValues;
    register?: UseFormRegisterReturn;
    disabled?: boolean;
    inputProps?:
        | Partial<FilledInputProps>
        | Partial<OutlinedInputProps>
        | Partial<InputProps>;
    isAutoFocus?: boolean;
    isSelect?: boolean;
    isAutoComplete?: boolean;
    inputLabelProps?: Partial<InputLabelProps<"label">>;
    children?: ReactNode;
}

export const CustomInput = (props: Props) => {
    const {
        name,
        type,
        value,
        label,
        placeholder,
        multiline,
        onChangeValue,
        errorText,
        field,
        register,
        disabled,
        inputProps,
        isAutoFocus,
        isSelect,
        isAutoComplete,
        inputLabelProps,
        children,
    } = props;

    return (
        <FormControl error sx={{ flex: "1", width: "100%" }} variant="outlined">
            <TextField
                {...field}
                {...register}
                autoFocus={isAutoFocus}
                name={name}
                type={type}
                value={value}
                multiline={multiline}
                placeholder={placeholder}
                onChange={onChangeValue}
                label={label}
                select={isSelect}
                size="small"
                minRows={multiline ? 2 : 1}
                aria-describedby="error-text"
                sx={{
                    background: (theme: Theme) =>
                        theme.palette.colors.greyLight,
                    borderRadius: "4px",
                }}
                disabled={disabled}
                error={!!errorText}
                InputProps={{
                    ...inputProps,
                    autoComplete: isAutoComplete ? "" : "new-password",
                }}
                InputLabelProps={inputLabelProps}
            >
                {children}
            </TextField>
            <FormHelperText id="error-text-input">
                {errorText ?? ""}
            </FormHelperText>
        </FormControl>
    );
};
