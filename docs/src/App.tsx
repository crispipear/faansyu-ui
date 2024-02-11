import React from 'react'
import { FsProvider } from 'faansyu-ui'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Nav, TopicsNav } from './Nav';
import {
  About,
  GettingStarted,
  Theming,
} from './content';
import ROUTES from './routes';

const COMPONENT_ROUTES = ROUTES.map(
  (item) => <Route path={item.path} key={item.path} element={item.element}/>
)

const App = () => {
  return (
    <FsProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Nav componentsList={ROUTES}/>
        <main className="main" id="main-content">
          <Routes>
            <Route index path='/' element={<About />} />
            <Route path='/getting-started' element={<GettingStarted />} />
            <Route path='/theme-and-styling' element={<Theming />} />
            {COMPONENT_ROUTES}
          </Routes>
        </main>
        <TopicsNav />
      </Router>
    </FsProvider>
  )
}

export default App
