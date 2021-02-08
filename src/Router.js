import React from 'react'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import One from './iterations/One'
import Two from './iterations/Two'

const Home = () => <Redirect to='/one' />

const Router = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/one'>iteration 1</Link>
        </li>
        <li>
          <Link to='/two'>iteration 2</Link>
        </li>
      </ul>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={One} path='/one' />
        <Route component={Two} path='/two' />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
