import { ServerError } from "@apollo/client/link/utils";
import { onError } from "@apollo/client/link/error";

import useAuthStore from "store/authStore";
import { StatusCode } from "utils/constants/statusCode";

export const errorLink = onError(({ networkError, graphQLErrors }) => {
    if (
        networkError &&
        (networkError as ServerError).statusCode === StatusCode.UNAUTHORIZED
    ) {
        localStorage.removeItem("token");
        useAuthStore.setState({
            user: null,
            isAccessAllow: false,
        });
    }
});
