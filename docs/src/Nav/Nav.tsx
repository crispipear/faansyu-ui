import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Header, Text, Divider } from 'faanshu-ui'
import './Nav.css';

const INTRO_ROUTES = [
  ['About', '/'],
  ['Getting started', '/getting-started'],
]

interface ComponentListItem {
  path: string
  name: string
  component: React.ReactNode
}

function Nav({componentsList}: {componentsList: ComponentListItem[]}): React.ReactElement {
  const location = useLocation();

  const currentRoute = React.useMemo<string>(() => {
    return location.pathname
  }, [location])


  return (
    <nav className="nav">
      <div className="nav-title">
        <Link to="/">
          <Header fontSize="m" style={{margin: 0, paddingTop: '1rem'}}>
            faanshu ui
          </Header>
        </Link>
        <Text fontSize="xs">
          version: v0.0.0
        </Text>
      </div>
      <Divider />
      <ul>
        {
          INTRO_ROUTES.map((route) => 
            <Link key={route[0]} to={route[1]} className={currentRoute === route[1] ? 'current-route' : undefined}>
              <li>{route[0]}</li>
            </Link>
          )
        }
      </ul>
      <Divider />
      <ul>
        {
          componentsList.map((c) => 
            <Link key={c.path} to={c.path} className={currentRoute === c.path ? 'current-route' : undefined}>
              <li>{c.name}</li>
            </Link>
          )
        }
      </ul>
      
    </nav>
  )
}

export default Nav
