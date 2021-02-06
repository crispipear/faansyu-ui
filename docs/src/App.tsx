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
  Theming,
  Overview,
  //components
  Table,
  Tag,
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
    name: 'Button',
    path: '/button',
    component: Button
  },
  {
    name: 'Table',
    path: '/table',
    component: Table
  },
  {
    name: 'Tag',
    path: '/tag',
    component: Tag
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
            <Route path='/theming' component={Theming} />
            {COMPONENT_ROUTES}
          </Switch>
        </main>
      </Router>
    </FsThemeProvider>
  )
}

export default App
