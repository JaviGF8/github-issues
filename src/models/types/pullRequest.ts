import LabelType from './label';
import UserType from './user';

type PullRequestType = {
  author_association: string;
  body: string;
  comments_url: string;
  commits_url: string;
  created_at: string;
  diff_url: string;
  draft: boolean;
  html_url: string;
  id: number;
  issue_url: string;
  labels: LabelType[];
  locked: boolean;
  merge_commit_sha: string;
  node_id: string;
  number: number;
  patch_url: string;
  review_comment_url: string;
  review_comments_url: string;
  state: string;
  statuses_url: string;
  title: string;
  updated_at: string;
  url: string;
  user: UserType;
  // base: {label: "octocat:master", ref: "master", sha: "7fd1a60b01f91b314f59955a4e4d4e80d8edf11d",…};
  // head: {label: "thomasokc:master", ref: "master", sha: "543259410805744c2e7b9e62644de7554114fe29",…};
};

export default PullRequestType;
