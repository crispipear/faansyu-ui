import React from 'react'
import { 
  FsProvider,
  Header,
  HeaderProps,
  Paragraph,
} from 'faanshu-ui'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Nav, TopicsNav } from './Nav';
import { MDXProvider } from '@mdx-js/react';
import {
  About,
  GettingStarted,
  Theming,
} from './content';
import CodeSnippet from './Demo/CodeSnippet';
import ROUTES from './routes';

const COMPONENT_ROUTES = ROUTES.map(
  (item) => <Route path={item.path} key={item.path} component={item.component}/>
)

const components = {
  h1: Header,
  h2: (props: HeaderProps) => <Header tag="h2" {...props} />,
  h3: (props: HeaderProps) => <Header tag="h3" {...props} />,
  h4: (props: HeaderProps) => <Header tag="h4" {...props} />,
  h5: (props: HeaderProps) => <Header tag="h5" {...props} />,
  h6: (props: HeaderProps) => <Header tag="h6" {...props} />,
  p: Paragraph,
  code: (props: any) => <CodeSnippet code={props.children} {...props} />,
}

const App = () => {
  return (
    <MDXProvider components={components}>
      <FsProvider>
        <Router>
          <Nav componentsList={ROUTES}/>
          <main className="main" id="main-content">
            <Switch>
              <Route exact path='/' component={About} />
              <Route path='/getting-started' component={GettingStarted} />
              <Route path='/theme-and-styling' component={Theming} />
              {COMPONENT_ROUTES}
            </Switch>
          </main>
          <TopicsNav />
        </Router>
      </FsProvider>
    </MDXProvider>
  )
}

export default App
