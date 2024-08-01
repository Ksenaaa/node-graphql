import { RouterApp } from "router/RouterApp";
import { CssBaseline } from "@mui/material";

import Theme from "theme/Theme";

function App() {
    return (
        <Theme>
            <CssBaseline />
            <RouterApp />
        </Theme>
    );
}

export default App;
