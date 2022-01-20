import axiosInstance from './axios';

const searchIssues = (username: string, repository: string) =>
  axiosInstance.get(`/${username}/${repository}/issues`);

const searchPullRequests = (username: string, repository: string) =>
  axiosInstance.get(`/${username}/${repository}/pulls`);

export default {
  searchIssues,
  searchPullRequests,
};
