import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import CommentType from 'models/types/comment';

import Loader from 'components/base/Loader';
import Page from 'components/base/Page';

import useAppContext from 'hooks/useAppContext';
import utils from 'utils';

import ElementPageProps from './types.d';

import './index.scss';

const ElementPage = <T extends Record<string, unknown>>({
  apiCall,
  apiCommentsCall,
  getBody,
  getTitle,
}: ElementPageProps<T>): ReactElement => {
  const [comments, setComment] = useState<CommentType[]>();
  const [element, setElement] = useState<T>();
  const [loading, setLoading] = useState(true);
  const { repository, user } = useAppContext();
  const { number } = useParams();
  const { t } = useTranslation();

  const loadInfo = async () => {
    if (user && repository && number) {
      setLoading(true);
      try {
        const res = await apiCall(user, repository, number);
        const resCom = await apiCommentsCall(user, repository, number);
        setElement(res.data as T);
        setComment(resCom.data);
        setLoading(false);
      } catch {
        // eslint-disable-next-line no-alert
        window.alert('error');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadInfo();
  }, [number]);
  return (
    <Page className="element-page">
      {loading && <Loader />}
      {user && repository && element && (
        <Fragment>
          <h2>{getTitle(element)}</h2>
          {getBody(element)}
          {!!comments?.length && (
            <div>
              <h4>{t('common.comments')}:</h4>
              {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                  <div>{comment.user.login}</div>
                  <div>{comment.body}</div>
                  <div className="comment-date">
                    {utils.dateManager.dateToString(new Date(comment.created_at))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Fragment>
      )}
      {(!user || !repository || !element) && !loading && <div>{t('common.notFoundPage')}</div>}
    </Page>
  );
};

export default ElementPage;
