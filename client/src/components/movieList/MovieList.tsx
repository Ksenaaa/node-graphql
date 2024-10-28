import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery } from "@apollo/client";
import { Paper, Theme } from "@mui/material";

import { LoaderInBox } from "components/loader/LoaderInBox";
import { ErrorMessage } from "components/errorMessage/ErrorMessage";
import { GET_MOVIE_CARDS } from "./graphql/movies.query";
import { MovieItem } from "./MovieItem";

export const MovieList = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const { loading, error, data, refetch, fetchMore } = useQuery(
        GET_MOVIE_CARDS,
        {
            variables: { limit: 5 },
        }
    );

    const handleFetchMore = useCallback(() => {
        fetchMore({
            variables: {
                cursor: data?.movies.pageInfo.endCursor,
                limit: 3,
                offset: data?.movies.edges.node.length,
            },
            updateQuery: (prevResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prevResult;

                fetchMoreResult.movies.edges.node = [
                    ...prevResult.movies.edges.node,
                    ...fetchMoreResult.movies.edges.node,
                ];

                return fetchMoreResult;
            },
        });
    }, [
        data?.movies.edges.node.length,
        data?.movies.pageInfo.endCursor,
        fetchMore,
    ]);

    useEffect(() => {
        if (
            scrollContainerRef.current &&
            scrollContainerRef.current.scrollHeight <=
                scrollContainerRef.current.clientHeight + 600 &&
            data?.movies.pageInfo.hasNextPage
        ) {
            handleFetchMore();
        }
    }, [data?.movies.pageInfo.hasNextPage, handleFetchMore]);

    if (loading) return <LoaderInBox />;
    if (error) return <ErrorMessage onClick={refetch} />;

    return (
        <Paper
            id="scrollMoviesCard"
            ref={scrollContainerRef}
            sx={{
                width: "1900px",
                maxWidth: "100%",
                padding: "20px",
                maxHeight: "100%",
                overflow: "scroll",
                background: (theme: Theme) => theme.palette.colors.greyBlue,
            }}
        >
            <InfiniteScroll
                dataLength={data?.movies.edges.node.length || 0}
                next={handleFetchMore}
                hasMore={data?.movies.pageInfo.hasNextPage || false}
                loader={<LoaderInBox />}
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                    gap: "16px",
                }}
                scrollableTarget="scrollMoviesCard"
            >
                {data?.movies.edges.node.map((movie) => (
                    <MovieItem
                        key={movie?.id}
                        movie={movie}
                        navigate={navigate}
                    />
                ))}
            </InfiniteScroll>
        </Paper>
    );
};
