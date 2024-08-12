import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

import { LoaderInBox } from "components/loader/LoaderInBox";
import { ButtonIconTooltip } from "components/buttonIconTooltip/ButtonIconTooltip";
import { ContainerMain } from "components/containerMain/ContainerMain";
import { PageTitle } from "components/pageTitle/PageTitle";
import { MovieInfo } from "components/movieInfo/MovieInfo";
import { GET_MOVIE_BY_ID } from "components/movieInfo/graphql/movie.query";

export const MovieInfoPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { loading, data: movie } = useQuery(GET_MOVIE_BY_ID, {
        variables: { movieByIdId: id! },
    });

    const goBack = () => {
        navigate(-1);
    };

    if (loading) return <LoaderInBox />;

    return (
        <ContainerMain>
            <ButtonIconTooltip onClick={goBack} sx={{ marginRight: "auto" }}>
                <ArrowBackIosTwoToneIcon sx={{ fontSize: "30px" }} />
            </ButtonIconTooltip>
            <PageTitle title={movie?.movieById?.title ?? ""} />
            <MovieInfo movie={movie?.movieById} />
        </ContainerMain>
    );
};
