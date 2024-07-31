import { gql } from '@apollo/client';

export const DELETE_USER = gql`
    mutation DeleteUser($userId: ID!) {
        deleteUser(id: $userId)
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($dataUser: CreateUser) {
        addUser(dataUser: $dataUser) {
            id
            email
            name
            password
        }
    }
`;

export const UPDATE_USER = gql`
    mutation UpdateUser($updateUserId: ID!, $updatedDataUser: UpdateUser!) {
        updateUser(id: $updateUserId, updatedDataUser: $updatedDataUser) {
            id
            email
            name
            password
        }
    }
`;