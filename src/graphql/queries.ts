/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getWordSearch = /* GraphQL */ `query GetWordSearch($id: ID!) {
  getWordSearch(id: $id) {
    id
    name
    columns
    rows
    wordBank
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWordSearchQueryVariables,
  APITypes.GetWordSearchQuery
>;
export const listWordSearches = /* GraphQL */ `query ListWordSearches(
  $filter: ModelWordSearchFilterInput
  $limit: Int
  $nextToken: String
) {
  listWordSearches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      columns
      rows
      wordBank
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWordSearchesQueryVariables,
  APITypes.ListWordSearchesQuery
>;
