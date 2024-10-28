import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { Paper, Stack, Theme } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

import { LoaderInBox } from "components/loader/LoaderInBox";
import { ErrorMessage } from "components/errorMessage/ErrorMessage";
import { useToggle } from "utils/helpers/useToggle";
import { UserItem } from "../userItem/UserItem";
import { ControlButtons } from "../controlButtons/ControlButtons";
import { GET_USERS } from "../graphql/users.query";
import { UserForm } from "../userForm/UserForm";
import { User } from "__generated__/graphql";

export const UserList = () => {
    const [selectedUserId, setSelectedUserId] = useState("");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const { loading, error, data, refetch, fetchMore } = useQuery(GET_USERS, {
        variables: { limit: 5 },
    });

    const { isOpen: isOpenModalUser, onToggle: onToggleModalUser } =
        useToggle();

    const handleCloseModalUser = () => {
        setSelectedUserId("");
        onToggleModalUser();
    };

    const handleChangeUser = useCallback(
        (user: User) => {
            setSelectedUserId(user.id);
            onToggleModalUser();
        },
        [onToggleModalUser]
    );

    const handleFetchMore = useCallback(() => {
        fetchMore({
            variables: {
                cursor: data?.users.pageInfo.endCursor,
                limit: 3,
                offset: data?.users.edges.node.length,
            },
            updateQuery: (prevResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prevResult;

                fetchMoreResult.users.edges.node = [
                    ...prevResult.users.edges.node,
                    ...fetchMoreResult.users.edges.node,
                ];

                return fetchMoreResult;
            },
        });
    }, [
        data?.users.edges.node.length,
        data?.users.pageInfo.endCursor,
        fetchMore,
    ]);

    useEffect(() => {
        if (
            scrollContainerRef.current &&
            scrollContainerRef.current.scrollHeight <=
                scrollContainerRef.current.clientHeight + 300 &&
            data?.users.pageInfo.hasNextPage
        ) {
            handleFetchMore();
        }
    }, [data?.users.pageInfo.hasNextPage, handleFetchMore]);

    if (loading) return <LoaderInBox />;
    if (error) return <ErrorMessage onClick={refetch} />;

    return (
        <>
            <Paper
                sx={{
                    width: "700px",
                    maxWidth: "100%",
                    margin: "0 auto",
                    padding: "20px 1.2rem",
                    minHeight: "1px",
                    maxHeight: "100%",
                    overflow: "hidden",
                    background: (theme: Theme) => theme.palette.primary.main,
                }}
            >
                <ControlButtons onCreateUser={onToggleModalUser} />
                <Stack
                    id="scrollUsersCard"
                    ref={scrollContainerRef}
                    sx={{
                        padding: "1rem",
                        maxHeight: "94%",
                        overflow: "scroll",
                        background: (theme: Theme) =>
                            theme.palette.colors.greyBlue,
                    }}
                >
                    <InfiniteScroll
                        dataLength={data?.users.edges.node.length || 0}
                        next={handleFetchMore}
                        hasMore={data?.users.pageInfo.hasNextPage || false}
                        loader={<LoaderInBox />}
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            alignContent: "center",
                            justifyContent: "center",
                            gap: "16px",
                        }}
                        scrollableTarget="scrollUsersCard"
                    >
                        {data?.users.edges.node.map((user) => (
                            <UserItem
                                key={user?.id}
                                user={user}
                                onChange={handleChangeUser}
                            />
                        ))}
                    </InfiniteScroll>
                </Stack>
            </Paper>
            {isOpenModalUser && (
                <UserForm
                    selectedUserId={selectedUserId}
                    isOpenModalUser={isOpenModalUser}
                    onCloseModalUser={handleCloseModalUser}
                />
            )}
        </>
    );
};
