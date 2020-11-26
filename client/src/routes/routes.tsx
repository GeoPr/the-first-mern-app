import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { SignUp } from '../pages/SignUp/SignUp'
import { Create } from '../pages/Create/Create'
import { Details } from '../pages/Details/Details'
import { Links } from '../pages/Links/Links'
import { Login } from '../pages/Login/Login'

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/links" component={Links} />
        <Route path="/create" component={Create} />
        <Route path="/details/:id" component={Details} />
        <Redirect to="/create" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route path="/login" component={Login} />
      <Redirect to="/" />
    </Switch>
  )
}
