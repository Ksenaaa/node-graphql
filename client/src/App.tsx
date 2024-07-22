import { CssBaseline } from "@mui/material";
import { UserControlPage } from "pages/UserControlPage";
import Theme from "theme/Theme";

function App() {
    return (
        <Theme>
            <CssBaseline />
            <UserControlPage />
        </Theme>
    );
}

export default App;
