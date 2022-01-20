import IssueType from 'models/types/issue';
import PullRequestType from 'models/types/pullRequest';

export type StateType = {
  error?: string;
  issues: IssueType[];
  loading: boolean;
  pullRequests: PullRequestType[];
  repository?: string;
  user?: string;
};

export type AppContextType = StateType & {
  search: (user: string, repo: string) => void;
};
