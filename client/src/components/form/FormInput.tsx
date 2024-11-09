import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

import { CustomInput } from "components/customInput/CustomInput";

interface Props<T extends FieldValues> {
    control: Control<T>;
    fieldName: FieldPath<T>;
    fieldLabel: string;
    type?: string;
    isMultiline?: boolean;
}

export const FormInput = <T extends FieldValues>({
    control,
    fieldName,
    fieldLabel,
    type,
    isMultiline,
}: Props<T>) => {
    return (
        <Controller
            control={control}
            name={fieldName}
            render={({
                field: { onChange, value = "", name },
                fieldState: { error },
            }) => (
                <CustomInput
                    name={name}
                    label={fieldLabel}
                    type={type}
                    isMultiline={isMultiline}
                    value={value || ""}
                    onChangeValue={(e) => onChange(e.target.value)}
                    errorText={error?.message}
                />
            )}
        />
    );
};
