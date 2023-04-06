import React, { Fragment } from 'react'
import AuthRoutes from './auth-routes';
import AppRoutes from './app-routes';

function RootRouter() {
  return (
   <Fragment>
      <AuthRoutes />
      <AppRoutes />
   </Fragment>
  )
}

export default RootRouter;
