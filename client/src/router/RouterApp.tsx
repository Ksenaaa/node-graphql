import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Layout } from "components/layout/Layout";
import { MoviesPage } from "pages/MoviesPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { UserControlPage } from "pages/UserControlPage";
import { MovieInfoPage } from "pages/MovieInfoPage";
import { LoginModal } from "pages/LoginModal";
import { RegisterModal } from "pages/RegisterModal";
import { RouterDirection } from "models/routerDirection";

export const RouterApp = () => {
    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <>
            <Routes location={background || location}>
                <Route path={RouterDirection.LAYOUT} element={<Layout />}>
                    <Route
                        index
                        element={<Navigate to={RouterDirection.MOVIES} />}
                    />
                    <Route
                        path={RouterDirection.MOVIES}
                        element={<MoviesPage />}
                    />
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
                    <Route
                        path={RouterDirection.NOT_FOUND}
                        element={<NotFoundPage />}
                    />
                    <Route
                        path={RouterDirection.LOGIN}
                        element={<LoginModal />}
                    />
                    <Route
                        path={RouterDirection.REGISTER}
                        element={<RegisterModal />}
                    />
                </Route>
            </Routes>
            {background && (
                <Routes>
                    <Route
                        path={RouterDirection.LOGIN}
                        element={<LoginModal />}
                    />
                    <Route
                        path={RouterDirection.REGISTER}
                        element={<RegisterModal />}
                    />
                </Routes>
            )}
        </>
    );
};
