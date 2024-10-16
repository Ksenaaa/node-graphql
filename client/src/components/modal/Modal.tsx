import { ReactNode } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Stack,
    Theme,
} from "@mui/material";

import { ConfirmationButtons } from "./modalTools/ConfirmationButtons";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAgree?: () => void;
    titleText: string;
    contentText?: string;
    children?: ReactNode;
    widthModal?: string;
}

export const Modal = ({
    isOpen,
    onClose,
    onAgree,
    titleText,
    contentText,
    children,
    widthModal = "500px",
}: Props) => {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            sx={{
                "& .MuiPaper-root.MuiDialog-paper": {
                    background: (theme: Theme) =>
                        theme.palette.background.default,
                },
            }}
        >
            <DialogTitle
                sx={{
                    textAlign: "center",
                    padding: "15px 46px",
                    background: (theme: Theme) => theme.palette.primary.main,
                    color: (theme: Theme) => theme.palette.colors.white,
                    fontWeight: "bold",
                }}
            >
                {titleText}
            </DialogTitle>
            <Divider />
            <DialogContent
                sx={{ textAlign: "center", padding: "22px 20px 10px" }}
            >
                {contentText && (
                    <DialogContentText>{contentText}</DialogContentText>
                )}
                <Stack
                    direction="column"
                    spacing={2}
                    sx={{ width: widthModal, maxWidth: "100%" }}
                >
                    {children}
                </Stack>
            </DialogContent>
            <DialogActions
                sx={{
                    justifyContent: "flex-end",
                    padding: "0",
                    margin: "9px",
                }}
            >
                <ConfirmationButtons onClose={onClose} onAgree={onAgree} />
            </DialogActions>
        </Dialog>
    );
};
