import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    InMemoryCache,
} from "@apollo/client";

import { authLink } from "utils/helpers/authLinkGraphQl";
import { errorLink } from "utils/helpers/errorLinkGraphQl";
import { httpLink } from "utils/helpers/httpLinkGraphQl";
import App from "./App";

import "./index.css";

const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
    defaultOptions: {
        mutate: {
            errorPolicy: "all",
        },
        query: {
            errorPolicy: "all",
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
);
