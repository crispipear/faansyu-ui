import React from 'react'
import Demo, { createCodeString } from '../../Demo';
import { Header, Table, ITableColumn, Paragraph } from 'faansyu-ui'
import { ApiTable } from '../../ApiTable'
import { TableApi, ColumnApi } from './Table.api';

interface ITea {
  name: string
  type: string
  chinese: string
}

const columns: ITableColumn<ITea>[] = [
  {
    header: "Name",
    key: "name",
    width: "200px",
    content: (tea) => tea.name
  },
  {
    header: "Type of tea",
    key: "type",
    content: (tea) => tea.type + " tea"
  },
  {
    header: "Chinese",
    key: "chinese",
    content: (tea) => tea.chinese
  }
]

const data: ITea[] = [
  {
    name: "24 Flavors",
    type: "Herbal",
    chinese: "廿四味"
  },
  {
    name: "Biluochun",
    type: "Green",
    chinese: "碧螺春"
  },
  {
    name: "Jinjunmei",
    type: "Black",
    chinese: "金骏眉"
  },
  {
    name: "Pu'er",
    type: "Fermented",
    chinese: "普洱"
  },
  {
    name: "Shoumei",
    type: "White",
    chinese: "寿眉"
  },
  {
    name: "Tieguanyin",
    type: "Oolong",
    chinese: "铁观音"
  }
];

const TABLE_STRING = "<Table data={data} columns={columns} />";

const TablePage = () => {
  return (
    <div>
      <Header>Table</Header>
      <Paragraph>
        Table displays data into columns and rows. Users can easily compare and analyze information with this visualization.
      </Paragraph>
      <Header fontSize="m">Basic</Header>
      <Demo code={
        createCodeString({
          component: "Table",
          used: ["Table"],
          configs: {columns, data},
          render: TABLE_STRING})
        }
      >
        <Table data={data} columns={columns} striped={true} />
      </Demo>
      <Header anchor tag="h2">API</Header>
      <ApiTable api={TableApi} />
      <ApiTable api={ColumnApi} header="Column" />
    </div>
  )
}

export default TablePage
