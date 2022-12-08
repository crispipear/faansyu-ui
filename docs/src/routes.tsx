import React from 'react';
import {
  Overview,
  //components
  Table,
  Tag,
  Button,
  Typography
} from './content';

const ROUTES = [
  {
    name: 'Overview',
    path: '/overview',
    element: <Overview />
  },
  {
    name: 'Button',
    path: '/button',
    element: <Button />
  },
  {
    name: 'Table',
    path: '/table',
    element: <Table />
  },
  {
    name: 'Tag',
    path: '/tag',
    element: <Tag />
  },
  {
    name: 'Typograhpy',
    path: '/typography',
    element: <Typography />
  },
]

export default ROUTES;