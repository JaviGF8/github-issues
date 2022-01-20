import config from 'config';
import React, { useReducer, FC, useMemo } from 'react';

import IssueType from 'models/types/issue';
import PullRequestType from 'models/types/pullRequest';

import { AppContext } from 'hooks/useAppContext';
import { reducer, initialState } from 'reducers/appContext';
import { DispatchTypes } from 'reducers/appContext/types.d';

const AppProvider: FC = ({ children }) => {
  const [auth, dispatchApp] = useReducer(reducer, initialState);

  const setIssues = (issues: IssueType[]) => {
    dispatchApp({ type: DispatchTypes.SET_ISSUES, payload: issues });
  };

  const setLoading = (loading: boolean) => {
    dispatchApp({ type: DispatchTypes.SET_LOADING, payload: loading });
  };

  const setPullRequests = (prs: PullRequestType[]) => {
    dispatchApp({ type: DispatchTypes.SET_PULL_REQUESTS, payload: prs });
  };

  const setRepository = (repository: string) => {
    dispatchApp({ type: DispatchTypes.SET_REPOSITORY, payload: repository });
  };

  const setUser = (user: string) => {
    dispatchApp({ type: DispatchTypes.SET_USER, payload: user });
  };

  const search = async (user: string, repository: string) => {
    setLoading(true);
    setUser(user);
    setRepository(repository);

    try {
      const prs = await config.api.searchPullRequests(user, repository);
      const issues = await config.api.searchIssues(user, repository);

      setIssues(issues.data);
      setPullRequests(prs.data);
      setLoading(false);
    } catch {
      setIssues([]);
      setPullRequests([]);
      setLoading(false);
    }
  };

  const memoizedValue = useMemo(() => ({ ...auth, search }), [auth, children]);

  return <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
