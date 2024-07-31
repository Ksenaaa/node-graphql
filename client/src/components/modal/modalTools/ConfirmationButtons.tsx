import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { Theme } from "@mui/material";

import { ButtonIconTooltip } from "components/buttonIconTooltip/ButtonIconTooltip";

interface Props {
    onClose: () => void;
    onAgree?: () => void;
}

export const ConfirmationButtons = ({ onClose, onAgree }: Props) => {
    return (
        <>
            <ButtonIconTooltip tooltipTitle="Agree" onClick={onAgree}>
                <CheckIcon
                    sx={{
                        fontSize: "35px",
                        color: (theme: Theme) => theme.palette.colors.green,
                    }}
                />
            </ButtonIconTooltip>
            <ButtonIconTooltip tooltipTitle="Close" onClick={onClose}>
                <CloseIcon
                    sx={{
                        fontSize: "38px",
                        color: (theme: Theme) => theme.palette.colors.red,
                    }}
                />
            </ButtonIconTooltip>
        </>
    );
};
