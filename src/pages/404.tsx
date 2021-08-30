import * as React from 'react';

import Seo from '../components/Seo';

const NotFoundPage = React.memo(() => (
  <>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
  </>
));

export default NotFoundPage;
