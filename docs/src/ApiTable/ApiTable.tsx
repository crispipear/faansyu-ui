import React from 'react'
import { Header, Table, ITableColumn } from 'faanshu-ui'
import './ApiTable.css';
import {IApiItem} from './ApiTable.utils';

const columns: ITableColumn<IApiItem>[] = [
  {
    header: "Property",
    key: "property",
    content: (i) => i.property,
    width: "15%"
  },
  {
    header: "Type",
    key: "type",
    content: (i) => i.type,
    width: "17.5%"
  },
  {
    header: "Description",
    key: "description",
    content: (i) => i.description,
    width: "52.5%"
  },
  {
    header: "Default",
    key: "default",
    content: (i) => i.default && <code>{i.default}</code>,
    width: "15%"
  },
]

export function ApiTable({api, header}: {api: IApiItem[], header?: string}): React.ReactElement {
  const sortedApi = React.useMemo<IApiItem[]>(() => {
    return api.sort((a, b) => {
      if (a.property && b.property){
        if ( a.property < b.property ){
        return -1;
        }
        if ( a.property > b.property ){
          return 1;
        }
      }
      return 0
    });
  }, [api]);

  return (
    <>
      {header && <Header tag="h3" anchor color="primary">{header}</Header>}
      <Table
        className="api-table"
        data={sortedApi}
        columns={columns}
        style={{border: '1px #E4E4E8 solid'}}
      />
    </>
  )
}