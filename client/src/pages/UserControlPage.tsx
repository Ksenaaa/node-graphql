import { Typography } from "@mui/material";

import { ContainerMain } from "components/containerMain/ContainerMain";
import { UserList } from "components/userControl/userList/UserList";

export const UserControlPage = () => {
    return (
        <ContainerMain>
            <Typography variant="h4" sx={{ marginBottom: "30px" }}>
                Users list:
            </Typography>
            <UserList />
        </ContainerMain>
    );
};
