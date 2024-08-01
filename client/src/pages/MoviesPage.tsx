import { ContainerMain } from "components/containerMain/ContainerMain";
import { MovieList } from "components/movieList/MovieList";
import { PageTitle } from "components/pageTitle/PageTitle";

export const MoviesPage = () => {
    return (
        <ContainerMain>
            <PageTitle title="Movies" />
            <MovieList />
        </ContainerMain>
    );
};
