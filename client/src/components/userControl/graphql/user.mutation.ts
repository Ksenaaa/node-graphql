import { gql } from "__generated__/gql";

export const DELETE_USER = gql(`
    mutation DeleteUser($userId: ID!) {
        deleteUser(id: $userId) {
            success
        }
    }
`);

export const REGISTER_USER = gql(`
    mutation CreateUser($dataUser: CreateDataUser!) {
        registerUser(dataUser: $dataUser) {
            id
            email
            name
        }
    }
`);

export const UPDATE_USER = gql(`
    mutation UpdateUser($updateUserId: ID!, $updatedDataUser: UpdateUser!) {
        updateUser(id: $updateUserId, updatedDataUser: $updatedDataUser) {
            id
            email
            name
        }
    }
`);
