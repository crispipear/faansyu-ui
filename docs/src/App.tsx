import React from 'react'
import { FsThemeProvider } from 'faanshu-ui'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  About,
  GettingStarted,
  Overview,
  //components
  Chip,
  Button,
  Typography
} from './content';
import Nav from './Nav';

const COMPONENTS_LIST = [
  {
    name: 'Overview',
    path: '/overview',
    component: Overview
  },
  {
    name: 'Chip',
    path: '/chip',
    component: Chip
  },
  {
    name: 'Button',
    path: '/button',
    component: Button
  },
  {
    name: 'Typograhpy',
    path: '/typography',
    component: Typography
  },
]

const COMPONENT_ROUTES = COMPONENTS_LIST.map(
  (item) => <Route path={item.path} key={item.path} component={item.component}/>
)

const App = () => {
  return (
    <FsThemeProvider>
      <Router>
        <Nav componentsList={COMPONENTS_LIST}/>
        <main className="main">
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/getting-started' component={GettingStarted} />
            {COMPONENT_ROUTES}
          </Switch>
        </main>
      </Router>
    </FsThemeProvider>
  )
}

export default App
