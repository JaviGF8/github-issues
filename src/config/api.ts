import axiosInstance from './axios';

const searchIssueByNumber = (username: string, repository: string, number: string) =>
  axiosInstance.get(`/${username}/${repository}/issues/${number}`);
const searchIssueComments = (username: string, repository: string, number: string) =>
  axiosInstance.get(`/${username}/${repository}/issues/${number}/comments`);
const searchIssues = (username: string, repository: string) =>
  axiosInstance.get(`/${username}/${repository}/issues`);

const searchPullRequestByNumber = (username: string, repository: string, number: string) =>
  axiosInstance.get(`/${username}/${repository}/pulls/${number}`);
const searchPullRequests = (username: string, repository: string) =>
  axiosInstance.get(`/${username}/${repository}/pulls`);

export default {
  searchIssueByNumber,
  searchIssueComments,
  searchIssues,
  searchPullRequestByNumber,
  searchPullRequests,
};
