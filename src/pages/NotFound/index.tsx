import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Page from 'components/base/Page';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <h2>{t('common.pageNotFound')}</h2>
    </Page>
  );
};

export default NotFoundPage;
