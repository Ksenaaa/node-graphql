/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation DeleteMovie($deleteMovieId: ID!) {\n        deleteMovie(id: $deleteMovieId)\n    }\n": types.DeleteMovieDocument,
    "\n    mutation CreateMovie($dataMovie: DataMovie) {\n        addMovie(dataMovie: $dataMovie) {\n            id\n            plot\n            genres\n            runtime\n            cast\n            poster\n            title\n            fullplot\n            languages\n            released\n            directors\n            rated\n            awards {\n                nominations\n                text\n                wins\n            }\n            lastupdated\n            year\n            imdb {\n                id\n                rating\n                votes\n            }\n            countries\n            type\n            tomatoes {\n                dvd\n                lastUpdated\n                viewer {\n                    meter\n                    numReviews\n                    rating\n                }\n            }\n        }\n    }\n": types.CreateMovieDocument,
    "\n    mutation UpdateMovie($updateMovieId: ID!, $updatedDataMovie: DataMovie!) {\n        updateMovie(id: $updateMovieId, updatedDataMovie: $updatedDataMovie) {\n            id\n            plot\n            genres\n            runtime\n            cast\n            poster\n            title\n            fullplot\n            languages\n            released\n            directors\n            rated\n            awards {\n                nominations\n                text\n                wins\n            }\n            lastupdated\n            year\n            imdb {\n                id\n                rating\n                votes\n            }\n            countries\n            type\n            tomatoes {\n                dvd\n                lastUpdated\n                viewer {\n                    meter\n                    numReviews\n                    rating\n                }\n            }\n        }\n    }\n": types.UpdateMovieDocument,
    "\n    query GetMovieCardsQuery {\n        movies {\n            id\n            year\n            title\n            poster\n            countries\n        }\n    }\n": types.GetMovieCardsQueryDocument,
    "\n    mutation DeleteUser($userId: ID!) {\n        deleteUser(id: $userId)\n    }\n": types.DeleteUserDocument,
    "\n    mutation CreateUser($dataUser: CreateUser) {\n        addUser(dataUser: $dataUser) {\n            id\n            email\n            name\n            password\n        }\n    }\n": types.CreateUserDocument,
    "\n    mutation UpdateUser($updateUserId: ID!, $updatedDataUser: UpdateUser!) {\n        updateUser(id: $updateUserId, updatedDataUser: $updatedDataUser) {\n            id\n            email\n            name\n            password\n        }\n    }\n": types.UpdateUserDocument,
    "\n    query GetUsers {\n        users {\n            id\n            name\n            email\n            password\n        }\n    }\n": types.GetUsersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteMovie($deleteMovieId: ID!) {\n        deleteMovie(id: $deleteMovieId)\n    }\n"): (typeof documents)["\n    mutation DeleteMovie($deleteMovieId: ID!) {\n        deleteMovie(id: $deleteMovieId)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateMovie($dataMovie: DataMovie) {\n        addMovie(dataMovie: $dataMovie) {\n            id\n            plot\n            genres\n            runtime\n            cast\n            poster\n            title\n            fullplot\n            languages\n            released\n            directors\n            rated\n            awards {\n                nominations\n                text\n                wins\n            }\n            lastupdated\n            year\n            imdb {\n                id\n                rating\n                votes\n            }\n            countries\n            type\n            tomatoes {\n                dvd\n                lastUpdated\n                viewer {\n                    meter\n                    numReviews\n                    rating\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateMovie($dataMovie: DataMovie) {\n        addMovie(dataMovie: $dataMovie) {\n            id\n            plot\n            genres\n            runtime\n            cast\n            poster\n            title\n            fullplot\n            languages\n            released\n            directors\n            rated\n            awards {\n                nominations\n                text\n                wins\n            }\n            lastupdated\n            year\n            imdb {\n                id\n                rating\n                votes\n            }\n            countries\n            type\n            tomatoes {\n                dvd\n                lastUpdated\n                viewer {\n                    meter\n                    numReviews\n                    rating\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateMovie($updateMovieId: ID!, $updatedDataMovie: DataMovie!) {\n        updateMovie(id: $updateMovieId, updatedDataMovie: $updatedDataMovie) {\n            id\n            plot\n            genres\n            runtime\n            cast\n            poster\n            title\n            fullplot\n            languages\n            released\n            directors\n            rated\n            awards {\n                nominations\n                text\n                wins\n            }\n            lastupdated\n            year\n            imdb {\n                id\n                rating\n                votes\n            }\n            countries\n            type\n            tomatoes {\n                dvd\n                lastUpdated\n                viewer {\n                    meter\n                    numReviews\n                    rating\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateMovie($updateMovieId: ID!, $updatedDataMovie: DataMovie!) {\n        updateMovie(id: $updateMovieId, updatedDataMovie: $updatedDataMovie) {\n            id\n            plot\n            genres\n            runtime\n            cast\n            poster\n            title\n            fullplot\n            languages\n            released\n            directors\n            rated\n            awards {\n                nominations\n                text\n                wins\n            }\n            lastupdated\n            year\n            imdb {\n                id\n                rating\n                votes\n            }\n            countries\n            type\n            tomatoes {\n                dvd\n                lastUpdated\n                viewer {\n                    meter\n                    numReviews\n                    rating\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetMovieCardsQuery {\n        movies {\n            id\n            year\n            title\n            poster\n            countries\n        }\n    }\n"): (typeof documents)["\n    query GetMovieCardsQuery {\n        movies {\n            id\n            year\n            title\n            poster\n            countries\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteUser($userId: ID!) {\n        deleteUser(id: $userId)\n    }\n"): (typeof documents)["\n    mutation DeleteUser($userId: ID!) {\n        deleteUser(id: $userId)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateUser($dataUser: CreateUser) {\n        addUser(dataUser: $dataUser) {\n            id\n            email\n            name\n            password\n        }\n    }\n"): (typeof documents)["\n    mutation CreateUser($dataUser: CreateUser) {\n        addUser(dataUser: $dataUser) {\n            id\n            email\n            name\n            password\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateUser($updateUserId: ID!, $updatedDataUser: UpdateUser!) {\n        updateUser(id: $updateUserId, updatedDataUser: $updatedDataUser) {\n            id\n            email\n            name\n            password\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUser($updateUserId: ID!, $updatedDataUser: UpdateUser!) {\n        updateUser(id: $updateUserId, updatedDataUser: $updatedDataUser) {\n            id\n            email\n            name\n            password\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUsers {\n        users {\n            id\n            name\n            email\n            password\n        }\n    }\n"): (typeof documents)["\n    query GetUsers {\n        users {\n            id\n            name\n            email\n            password\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;