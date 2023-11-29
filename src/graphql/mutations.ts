/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const generateWordSearchWords = /* GraphQL */ `mutation GenerateWordSearchWords($theme: String!) {
  generateWordSearchWords(theme: $theme)
}
` as GeneratedMutation<
  APITypes.GenerateWordSearchWordsMutationVariables,
  APITypes.GenerateWordSearchWordsMutation
>;
export const createWordSearch = /* GraphQL */ `mutation CreateWordSearch(
  $input: CreateWordSearchInput!
  $condition: ModelWordSearchConditionInput
) {
  createWordSearch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateWordSearchMutationVariables,
  APITypes.CreateWordSearchMutation
>;
export const updateWordSearch = /* GraphQL */ `mutation UpdateWordSearch(
  $input: UpdateWordSearchInput!
  $condition: ModelWordSearchConditionInput
) {
  updateWordSearch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateWordSearchMutationVariables,
  APITypes.UpdateWordSearchMutation
>;
export const deleteWordSearch = /* GraphQL */ `mutation DeleteWordSearch(
  $input: DeleteWordSearchInput!
  $condition: ModelWordSearchConditionInput
) {
  deleteWordSearch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteWordSearchMutationVariables,
  APITypes.DeleteWordSearchMutation
>;
