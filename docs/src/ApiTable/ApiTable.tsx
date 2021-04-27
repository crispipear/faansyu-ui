import React from 'react'
import { Header, Table, ITableColumn } from 'faanshu-ui'
import { IApiItem } from './ApiTable.utils';
import './ApiTable.css';

const columns: ITableColumn<IApiItem>[] = [
  {
    header: "Property",
    key: "property",
    content: (i) => i.property,
    width: "20%"
  },
  {
    header: "Type",
    key: "type",
    content: (i) => i.type,
  },
  {
    header: "Description",
    key: "description",
    content: (i) => i.description,
    width: "50%"
  },
  {
    header: "Default",
    key: "default",
    content: (i) => i.default && <code>{i.default}</code>
  },
]

export const ApiTable = ({api, header}: {api: IApiItem[], header?: string}) => {
  return (
    <>
      <Header fontSize="s">{header || "API"}</Header>
      <Table
        className="api-table"
        data={api}
        columns={columns}
        style={{border: '1px #E4E4E8 solid'}}
      />
    </>
  )
}