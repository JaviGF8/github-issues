import UserType from './user';

type CommentType = {
  author_association: string;
  body: string;
  created_at: string;
  html_url: string;
  id: number;
  issue_url: string;
  node_id: string;
  updated_at: string;
  url: string;
  user: UserType;
};

export default CommentType;
