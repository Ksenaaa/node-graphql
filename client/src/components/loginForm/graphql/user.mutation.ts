import { gql } from "__generated__/gql";

export const LOG_IN_USER = gql(`
    mutation LogInUser($dataUser: LoginData!) {
        login(dataUser: $dataUser) {
            token
            user {
                name
            }
        }
    }
`);
