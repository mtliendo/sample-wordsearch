/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateWordSearch = /* GraphQL */ `subscription OnCreateWordSearch(
  $filter: ModelSubscriptionWordSearchFilterInput
) {
  onCreateWordSearch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWordSearchSubscriptionVariables,
  APITypes.OnCreateWordSearchSubscription
>;
export const onUpdateWordSearch = /* GraphQL */ `subscription OnUpdateWordSearch(
  $filter: ModelSubscriptionWordSearchFilterInput
) {
  onUpdateWordSearch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWordSearchSubscriptionVariables,
  APITypes.OnUpdateWordSearchSubscription
>;
export const onDeleteWordSearch = /* GraphQL */ `subscription OnDeleteWordSearch(
  $filter: ModelSubscriptionWordSearchFilterInput
) {
  onDeleteWordSearch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWordSearchSubscriptionVariables,
  APITypes.OnDeleteWordSearchSubscription
>;
