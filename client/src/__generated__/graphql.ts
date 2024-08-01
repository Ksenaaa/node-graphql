/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date custom scalar type */
  Date: { input: any; output: any; }
};

export type Awards = {
  __typename?: 'Awards';
  nominations?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  wins?: Maybe<Scalars['Int']['output']>;
};

export type AwardsInput = {
  nominations?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  wins?: InputMaybe<Scalars['Int']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  date: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  movie_id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  user: User;
};

export type CreateUser = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type DataMovie = {
  awards: AwardsInput;
  cast: Array<Scalars['String']['input']>;
  countries: Array<Scalars['String']['input']>;
  directors: Array<Scalars['String']['input']>;
  fullplot: Scalars['String']['input'];
  genres: Array<Scalars['String']['input']>;
  imdb: ImdbInput;
  languages: Array<Scalars['String']['input']>;
  lastupdated: Scalars['Date']['input'];
  plot: Scalars['String']['input'];
  poster: Scalars['String']['input'];
  rated: Scalars['String']['input'];
  released: Scalars['String']['input'];
  runtime: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  tomatoes: TomatoesInput;
  type: Scalars['String']['input'];
  year: Scalars['Int']['input'];
};

export type Imdb = {
  __typename?: 'Imdb';
  id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  votes?: Maybe<Scalars['Int']['output']>;
};

export type ImdbInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  votes?: InputMaybe<Scalars['Int']['input']>;
};

export type Movie = {
  __typename?: 'Movie';
  awards?: Maybe<Awards>;
  cast?: Maybe<Array<Scalars['String']['output']>>;
  comments?: Maybe<Array<Comment>>;
  countries?: Maybe<Array<Scalars['String']['output']>>;
  directors?: Maybe<Array<Scalars['String']['output']>>;
  fullplot?: Maybe<Scalars['String']['output']>;
  genres?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  imdb?: Maybe<Imdb>;
  languages?: Maybe<Array<Scalars['String']['output']>>;
  lastupdated?: Maybe<Scalars['Date']['output']>;
  plot?: Maybe<Scalars['String']['output']>;
  poster?: Maybe<Scalars['String']['output']>;
  rated?: Maybe<Scalars['String']['output']>;
  released?: Maybe<Scalars['String']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tomatoes?: Maybe<Tomatoes>;
  type?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMovie: Movie;
  addUser: User;
  deleteMovie: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  updateMovie?: Maybe<Movie>;
  updateUser?: Maybe<User>;
};


export type MutationAddMovieArgs = {
  dataMovie?: InputMaybe<DataMovie>;
};


export type MutationAddUserArgs = {
  dataUser?: InputMaybe<CreateUser>;
};


export type MutationDeleteMovieArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateMovieArgs = {
  id: Scalars['ID']['input'];
  updatedDataMovie: DataMovie;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  updatedDataUser: UpdateUser;
};

export type Query = {
  __typename?: 'Query';
  comments: Array<Comment>;
  movieById?: Maybe<Movie>;
  movies: Array<Movie>;
  userById?: Maybe<User>;
  users: Array<User>;
};


export type QueryMovieByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Tomatoes = {
  __typename?: 'Tomatoes';
  dvd?: Maybe<Scalars['Date']['output']>;
  lastUpdated?: Maybe<Scalars['Date']['output']>;
  viewer: TomatoesViewer;
};

export type TomatoesInput = {
  dvd?: InputMaybe<Scalars['Date']['input']>;
  lastUpdated?: InputMaybe<Scalars['Date']['input']>;
  viewer: TomatoesViewerInput;
};

export type TomatoesViewer = {
  __typename?: 'TomatoesViewer';
  meter?: Maybe<Scalars['Int']['output']>;
  numReviews?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type TomatoesViewerInput = {
  meter?: InputMaybe<Scalars['Int']['input']>;
  numReviews?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUser = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  comments?: Maybe<Array<Comment>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type DeleteMovieMutationVariables = Exact<{
  deleteMovieId: Scalars['ID']['input'];
}>;


export type DeleteMovieMutation = { __typename?: 'Mutation', deleteMovie: boolean };

export type CreateMovieMutationVariables = Exact<{
  dataMovie?: InputMaybe<DataMovie>;
}>;


export type CreateMovieMutation = { __typename?: 'Mutation', addMovie: { __typename?: 'Movie', id: string, plot?: string | null, genres?: Array<string> | null, runtime?: number | null, cast?: Array<string> | null, poster?: string | null, title?: string | null, fullplot?: string | null, languages?: Array<string> | null, released?: string | null, directors?: Array<string> | null, rated?: string | null, lastupdated?: any | null, year?: number | null, countries?: Array<string> | null, type?: string | null, awards?: { __typename?: 'Awards', nominations?: number | null, text?: string | null, wins?: number | null } | null, imdb?: { __typename?: 'Imdb', id?: number | null, rating?: number | null, votes?: number | null } | null, tomatoes?: { __typename?: 'Tomatoes', dvd?: any | null, lastUpdated?: any | null, viewer: { __typename?: 'TomatoesViewer', meter?: number | null, numReviews?: number | null, rating?: number | null } } | null } };

export type UpdateMovieMutationVariables = Exact<{
  updateMovieId: Scalars['ID']['input'];
  updatedDataMovie: DataMovie;
}>;


export type UpdateMovieMutation = { __typename?: 'Mutation', updateMovie?: { __typename?: 'Movie', id: string, plot?: string | null, genres?: Array<string> | null, runtime?: number | null, cast?: Array<string> | null, poster?: string | null, title?: string | null, fullplot?: string | null, languages?: Array<string> | null, released?: string | null, directors?: Array<string> | null, rated?: string | null, lastupdated?: any | null, year?: number | null, countries?: Array<string> | null, type?: string | null, awards?: { __typename?: 'Awards', nominations?: number | null, text?: string | null, wins?: number | null } | null, imdb?: { __typename?: 'Imdb', id?: number | null, rating?: number | null, votes?: number | null } | null, tomatoes?: { __typename?: 'Tomatoes', dvd?: any | null, lastUpdated?: any | null, viewer: { __typename?: 'TomatoesViewer', meter?: number | null, numReviews?: number | null, rating?: number | null } } | null } | null };

export type GetMovieCardsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMovieCardsQueryQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string, year?: number | null, title?: string | null, poster?: string | null, countries?: Array<string> | null }> };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type CreateUserMutationVariables = Exact<{
  dataUser?: InputMaybe<CreateUser>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'User', id: string, email: string, name: string, password: string } };

export type UpdateUserMutationVariables = Exact<{
  updateUserId: Scalars['ID']['input'];
  updatedDataUser: UpdateUser;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, email: string, name: string, password: string } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, email: string, password: string }> };


export const DeleteMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteMovieId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteMovieId"}}}]}]}}]} as unknown as DocumentNode<DeleteMovieMutation, DeleteMovieMutationVariables>;
export const CreateMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dataMovie"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DataMovie"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dataMovie"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dataMovie"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"plot"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"runtime"}},{"kind":"Field","name":{"kind":"Name","value":"cast"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"fullplot"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"released"}},{"kind":"Field","name":{"kind":"Name","value":"directors"}},{"kind":"Field","name":{"kind":"Name","value":"rated"}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nominations"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"wins"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastupdated"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"imdb"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countries"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tomatoes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dvd"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meter"}},{"kind":"Field","name":{"kind":"Name","value":"numReviews"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateMovieMutation, CreateMovieMutationVariables>;
export const UpdateMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateMovieId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatedDataMovie"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DataMovie"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateMovieId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updatedDataMovie"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatedDataMovie"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"plot"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"runtime"}},{"kind":"Field","name":{"kind":"Name","value":"cast"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"fullplot"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"released"}},{"kind":"Field","name":{"kind":"Name","value":"directors"}},{"kind":"Field","name":{"kind":"Name","value":"rated"}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nominations"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"wins"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastupdated"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"imdb"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countries"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tomatoes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dvd"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meter"}},{"kind":"Field","name":{"kind":"Name","value":"numReviews"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateMovieMutation, UpdateMovieMutationVariables>;
export const GetMovieCardsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovieCardsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"countries"}}]}}]}}]} as unknown as DocumentNode<GetMovieCardsQueryQuery, GetMovieCardsQueryQueryVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dataUser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUser"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dataUser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dataUser"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatedDataUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUser"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updatedDataUser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatedDataUser"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;