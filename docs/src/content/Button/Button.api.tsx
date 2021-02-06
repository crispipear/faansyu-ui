import React from 'react'
import {IApiItem} from "../../ApiTable"

export const ButtonApi: IApiItem[] = [
  {
    property: "clear",
    type: "boolean",
    description: "Set the button background to be transparent",
    default: "false"
  },
  {
    property: "disabled",
    type: "boolean",
    description: "Set the button state to be disabled",
    default: "false"
  },
  {
    property: "light",
    type: "boolean",
    description: "Set the button background to be light colored",
    default: "false"
  },
  {
    property: "isLoading",
    type: "boolean",
    description: "Set the button state to be isLoading",
    default: "false"
  },
  {
    property: "onClick",
    type: "function",
    description:<div>
      <p>
        Set the handler of the click event
      </p>
      <b>Signature </b>
      <code>(event) =&gt; void;</code>
    </div>,
  },
  {
    property: "outlined",
    type: "boolean",
    description: "Set the button style to be outlined",
    default: "false"
  },
  {
    property: "rounded",
    type: "boolean",
    description: "Set the button edges to be rounded",
    default: "false"
  },
  {
    property: "variant",
    type: <a href="/overview">variants</a>,
    description: "Set the color variant of the button",
    default: "primary"
  }
]

export const IconButtonApi: IApiItem[] = [
  {
    property: "clear",
    type: "boolean",
    description: "Set the button background to be transparent",
    default: "true"
  },
  {
    property: "name",
    type: <a href="/icon">icon names</a>,
    description: "Sets the icon of the button. Sourcing from faanshu-ui icons",
  }
]
