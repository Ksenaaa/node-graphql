import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./App";

import "./index.css";

const client = new ApolloClient({
    uri: process.env.REACT_APP_BASE_URL ?? "",
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
