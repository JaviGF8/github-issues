import IssueType from 'models/types/issue';
import PullRequestType from 'models/types/pullRequest';

export enum DispatchTypes {
  SET_ERROR = 'SET_ERROR',
  SET_ISSUES = 'SET_ISSUES',
  SET_LOADING = 'SET_LOADING',
  SET_PULL_REQUESTS = 'SET_PULL_REQUESTS',
  SET_REPOSITORY = 'SET_REPOSITORY',
  SET_USER = 'SET_USER',
}

type ErrorActionType = {
  type: DispatchTypes.SET_ERROR;
  payload?: string;
};

type IssuesActionType = {
  type: DispatchTypes.SET_ISSUES;
  payload: IssueType[];
};

type PullRequestsActionType = {
  type: DispatchTypes.SET_PULL_REQUESTS;
  payload: PullRequestType[];
};

type LoadingActionType = {
  type: DispatchTypes.SET_LOADING;
  payload: boolean;
};

type RepositoryActionType = {
  type: DispatchTypes.SET_REPOSITORY;
  payload: string;
};

type UserActionType = {
  type: DispatchTypes.SET_USER;
  payload: string;
};

export type Action =
  | ErrorActionType
  | IssuesActionType
  | LoadingActionType
  | PullRequestsActionType
  | RepositoryActionType
  | UserActionType;
