import { ContainerMain } from "components/containerMain/ContainerMain";
import { PageTitle } from "components/pageTitle/PageTitle";
import { UserList } from "components/userControl/userList/UserList";

export const UserControlPage = () => {
    return (
        <ContainerMain>
            <PageTitle title="Users list" />
            <UserList />
        </ContainerMain>
    );
};
