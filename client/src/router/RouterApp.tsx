import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Layout } from "components/layout/Layout";
import { MoviesPage } from "pages/MoviesPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { UserControlPage } from "pages/UserControlPage";
import { RouterDirection } from "models/routerDirection";
import { MovieInfoPage } from "pages/MovieInfoPage";
import { LoginModal } from "pages/LoginModal";

export const RouterApp = () => {
    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <Routes>
            <Route path={RouterDirection.LAYOUT} element={<Layout />}>
                <Route
                    index
                    element={<Navigate to={RouterDirection.MOVIES} />}
                />
                <Route path={RouterDirection.MOVIES} element={<MoviesPage />} />
                <Route
                    path={`${RouterDirection.MOVIES}/:id`}
                    element={<MovieInfoPage />}
                />
                <Route
                    path={RouterDirection.USERS_CONTROL}
                    element={<UserControlPage />}
                />
                <Route
                    path={RouterDirection.PROFILE}
                    element={<ProfilePage />}
                />
                {background && (
                    <Route
                        path={RouterDirection.LOGIN}
                        element={<LoginModal />}
                    />
                )}
                <Route
                    path={RouterDirection.NOT_FOUND}
                    element={<NotFoundPage />}
                />
            </Route>
        </Routes>
    );
};
