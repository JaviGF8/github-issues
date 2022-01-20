import { AxiosResponse } from 'axios';
import { ReactElement } from 'react';

type ElementPageProps<T extends Record<string, unknown>> = {
  apiCall: (user: string, repository: string, number: string) => Promise<AxiosResponse>;
  apiCommentsCall: (user: string, repository: string, number: string) => Promise<AxiosResponse>;
  getBody: (element: T) => ReactElement;
  getTitle: (element: T) => string;
};

export default ElementPageProps;
