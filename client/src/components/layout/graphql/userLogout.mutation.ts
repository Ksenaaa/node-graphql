import { gql } from "__generated__/gql";

export const LOG_OUT_USER = gql(`
    mutation LogOutUser {
        logout {
            success
        }
    }
`);
