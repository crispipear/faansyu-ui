import React from 'react'
import { IApiItem, light, variant } from "../ApiTable"

const componentName = 'Table';

export const TableApi: IApiItem[] = [
  {
    property: "columns",
    type: <a href="#Column">Column[]</a>,
    description: "Column definitions for the table",
    default: "[]"
  },
  light({componentName}),
  {
    property: "data",
    type: "object[]",
    description: "Data to be displayed in the table",
    default: "[]"
  },
  {
    property: "striped",
    type: "boolean",
    description: "Styles the table with striped rows",
    default: "true"
  },
  variant({componentName})
]

export const ColumnApi: IApiItem[] = [
  {
    property: "header",
    type: "string",
    description: "Column definitions for the table",
  },
  {
    property: "key",
    type: "string",
    description: "A unique key/id for this column",
  },
  {
    property: "content",
    type: "function",
    description:<>
      <p>
        Render content value for each row in this column. The contentItem is assumed to be the type of object passed in data.</p>
      <b>Signature </b>
      <code>(contentItem) =&gt; ReactNode;</code>
    </>
  },
  {
    property: "width",
    type: "number | string",
    description: "Width for column",
  },
]