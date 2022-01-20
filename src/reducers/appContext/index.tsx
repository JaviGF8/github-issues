import IssueType from 'models/types/issue';
import PullRequestType from 'models/types/pullRequest';

import { StateType } from 'hooks/useAppContext/types.d';

import { Action, DispatchTypes } from './types.d';

export const initialState: StateType = {
  error: undefined,
  issues: [],
  loading: false,
  pullRequests: [],
  repository: undefined,
  user: undefined,
};

export const reducer = (state: StateType = initialState, action: Action): StateType => {
  const { type, payload } = action;
  switch (type) {
    case DispatchTypes.SET_ERROR:
      return { ...state, error: payload as string };
    case DispatchTypes.SET_ISSUES:
      return { ...state, issues: payload as IssueType[] };
    case DispatchTypes.SET_LOADING:
      return { ...state, loading: payload as boolean };
    case DispatchTypes.SET_PULL_REQUESTS:
      return { ...state, pullRequests: payload as PullRequestType[] };
    case DispatchTypes.SET_REPOSITORY:
      return { ...state, repository: payload as string };
    case DispatchTypes.SET_USER:
      return { ...state, user: payload as string };
    default:
      return state;
  }
};
