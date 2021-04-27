import React from 'react'
import {
  IApiItem,
  clear,
  disabled,
  isLoading,
  light,
  onClick,
  outlined,
  rounded,
  variant
} from "../ApiTable"

const componentName = 'Button';

export const ButtonApi: IApiItem[] = [
  light({componentName}),
  clear({componentName}),
  disabled({componentName}),
  isLoading({componentName}),
  onClick(),
  outlined({componentName}),
  rounded({componentName}),
  variant({componentName}),
  {
    property: "external",
    type: "boolean",
    description: <>Opens link in a new window (if <code>href</code> is defined)</>,
    default: "false"
  },
  {
    property: "href",
    type: "string",
    description: "Set the url for the link button",
  },
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
    type: <a href="/icon">icon</a>,
    description: "Sets the icon of the button. Sourcing from faanshu-ui icons",
  }
]
