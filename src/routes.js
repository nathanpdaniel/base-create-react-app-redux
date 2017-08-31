import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Container from './containers/Container';
import App from './containers/App';

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      <Route path="" component={App}>

      </Route>
    </Route>
  )
}

export default makeMainRoutes;