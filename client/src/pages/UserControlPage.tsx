import { Stack, Typography } from "@mui/material";
import { UserList } from "components/userControl/userList/UserList";
import { useEffect, useState } from "react";

export const UserControlPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchAPI = fetch("http://localhost:5000/users");
        fetchAPI
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Stack alignItems={"center"}>
            <Typography variant="h5" sx={{ marginBottom: "30px" }}>
                Users list list 2
            </Typography>
            <UserList users={users} />
        </Stack>
    );
};
