import LabelType from './label';
import UserType from './user';

type IssuePRType = {
  diff_url: string;
  html_url: string;
  patch_url: string;
  url: string;
};

type IssueType = {
  author_association: string;
  body: string;
  comments_url: string;
  comments: number;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels: LabelType[];
  labels_url: string;
  locked: boolean;
  node_id: string;
  number: number;
  pull_request?: IssuePRType;
  repository_url: string;
  state: string;
  timeline_url: string;
  title: string;
  updated_at: string;
  url: string;
  user: UserType;
};

export default IssueType;
