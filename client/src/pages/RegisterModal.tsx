import { useNavigate } from "react-router-dom";

import { UserForm } from "components/userControl/userForm/UserForm";

export const RegisterModal = () => {
    const navigate = useNavigate();

    const nandleCloseModal = () => {
        navigate(-2);
    };

    return <UserForm onCloseModalUser={nandleCloseModal} />;
};
