/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWordSearchInput = {
  id?: string | null,
  name: string,
  columns: number,
  rows: number,
  wordBank: Array< string | null >,
};

export type ModelWordSearchConditionInput = {
  name?: ModelStringInput | null,
  columns?: ModelIntInput | null,
  rows?: ModelIntInput | null,
  wordBank?: ModelStringInput | null,
  and?: Array< ModelWordSearchConditionInput | null > | null,
  or?: Array< ModelWordSearchConditionInput | null > | null,
  not?: ModelWordSearchConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type WordSearch = {
  __typename: "WordSearch",
  id: string,
  name: string,
  columns: number,
  rows: number,
  wordBank: Array< string | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWordSearchInput = {
  id: string,
  name?: string | null,
  columns?: number | null,
  rows?: number | null,
  wordBank?: Array< string | null > | null,
};

export type DeleteWordSearchInput = {
  id: string,
};

export type ModelWordSearchFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  columns?: ModelIntInput | null,
  rows?: ModelIntInput | null,
  wordBank?: ModelStringInput | null,
  and?: Array< ModelWordSearchFilterInput | null > | null,
  or?: Array< ModelWordSearchFilterInput | null > | null,
  not?: ModelWordSearchFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelWordSearchConnection = {
  __typename: "ModelWordSearchConnection",
  items:  Array<WordSearch | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionWordSearchFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  columns?: ModelSubscriptionIntInput | null,
  rows?: ModelSubscriptionIntInput | null,
  wordBank?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWordSearchFilterInput | null > | null,
  or?: Array< ModelSubscriptionWordSearchFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type GenerateWordSearchWordsMutationVariables = {
  theme: string,
};

export type GenerateWordSearchWordsMutation = {
  generateWordSearchWords: string,
};

export type CreateWordSearchMutationVariables = {
  input: CreateWordSearchInput,
  condition?: ModelWordSearchConditionInput | null,
};

export type CreateWordSearchMutation = {
  createWordSearch?:  {
    __typename: "WordSearch",
    id: string,
    name: string,
    columns: number,
    rows: number,
    wordBank: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWordSearchMutationVariables = {
  input: UpdateWordSearchInput,
  condition?: ModelWordSearchConditionInput | null,
};

export type UpdateWordSearchMutation = {
  updateWordSearch?:  {
    __typename: "WordSearch",
    id: string,
    name: string,
    columns: number,
    rows: number,
    wordBank: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWordSearchMutationVariables = {
  input: DeleteWordSearchInput,
  condition?: ModelWordSearchConditionInput | null,
};

export type DeleteWordSearchMutation = {
  deleteWordSearch?:  {
    __typename: "WordSearch",
    id: string,
    name: string,
    columns: number,
    rows: number,
    wordBank: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetWordSearchQueryVariables = {
  id: string,
};

export type GetWordSearchQuery = {
  getWordSearch?:  {
    __typename: "WordSearch",
    id: string,
    name: string,
    columns: number,
    rows: number,
    wordBank: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWordSearchesQueryVariables = {
  filter?: ModelWordSearchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWordSearchesQuery = {
  listWordSearches?:  {
    __typename: "ModelWordSearchConnection",
    items:  Array< {
      __typename: "WordSearch",
      id: string,
      name: string,
      columns: number,
      rows: number,
      wordBank: Array< string | null >,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWordSearchSubscriptionVariables = {
  filter?: ModelSubscriptionWordSearchFilterInput | null,
};

export type OnCreateWordSearchSubscription = {
  onCreateWordSearch?:  {
    __typename: "WordSearch",
    id: string,
    name: string,
    columns: number,
    rows: number,
    wordBank: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWordSearchSubscriptionVariables = {
  filter?: ModelSubscriptionWordSearchFilterInput | null,
};

export type OnUpdateWordSearchSubscription = {
  onUpdateWordSearch?:  {
    __typename: "WordSearch",
    id: string,
    name: string,
    columns: number,
    rows: number,
    wordBank: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWordSearchSubscriptionVariables = {
  filter?: ModelSubscriptionWordSearchFilterInput | null,
};

export type OnDeleteWordSearchSubscription = {
  onDeleteWordSearch?:  {
    __typename: "WordSearch",
    id: string,
    name: string,
    columns: number,
    rows: number,
    wordBank: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};
