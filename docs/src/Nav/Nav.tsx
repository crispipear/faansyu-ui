import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Header, Text, Divider } from 'faanshu-ui'
import './Nav.css';

const INTRO_ROUTES = [
  ['About', '/'],
  ['Getting started', '/getting-started'],
  ['Theme and styling', '/theme-and-styling']
]

interface ComponentListItem {
  path: string
  name: string
  component: React.ReactNode
}

function Nav({componentsList}: {componentsList: ComponentListItem[]}): React.ReactElement {
  const location = useLocation();

  const currentRoute = location.pathname;


  return (
    <div className="main-nav">
      <div className="nav-title">
        <div className="nav-logo"/>
        <div>
          <Link to="/">
            <Header fontSize="m" style={{margin: 0, lineHeight: 1}}>
                faanshu ui
            </Header>
          </Link>
          <Text color="secondary" fontSize="xxs">
            version: v0.0.0
          </Text>
        </div>
      </div>
      <Divider style={{marginBottom: 0}} />
      <ul>
        {
          INTRO_ROUTES.map((route) => 
            <Link key={route[0]} to={route[1]} className={currentRoute === route[1] ? 'current-route' : undefined}>
              <li><span>{route[0]}</span></li>
            </Link>
          )
        }
      </ul>
      <Divider style={{marginTop: 0}} />
      <ul>
        {
          componentsList.map((c) => 
            <Link key={c.path} to={c.path} className={currentRoute === c.path ? 'current-route' : undefined}>
              <li><span>{c.name}</span></li>
            </Link>
          )
        }
      </ul>
      
    </div>
  )
}

export default Nav
