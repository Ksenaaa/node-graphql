import Typography from "@mui/material/Typography";

interface Props {
    title: string;
}

export const PageTitle = ({ title }: Props) => {
    return (
        <Typography variant="h3" sx={{ mb: 5, textAlign: "center" }}>
            {title}
        </Typography>
    );
};
