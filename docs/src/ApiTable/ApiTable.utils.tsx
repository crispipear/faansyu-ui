import React from 'react';
import { SizeTypes } from 'faanshu-ui';

export interface IApiItem {
  property: React.ReactNode
  type?: React.ReactNode
  description?: React.ReactNode
  default?: string | number 
}

interface apiHelperProps {
  componentName: string;
  description?: React.ReactNode,
}

export const clear = ({componentName}: apiHelperProps):IApiItem => ({
  property: "clear",
  type: "boolean",
  description: `Set the ${componentName} background to be transparent`,
  default: "false"
})

export const typeColor = ({componentName}: apiHelperProps):IApiItem => ({
  property: "color",
  type: <a href="/overview">Variant</a>,
  description: `Set the color variant of the ${componentName}`,
  default: "text"
})

export const disabled = ({componentName}: apiHelperProps):IApiItem => ({
  property: "disabled",
  type: "boolean",
  description: `Set the ${componentName} state to be disabled`,
  default: "false"
})

export const light = ({componentName}: apiHelperProps):IApiItem => ({
  property: "light",
  type: "boolean",
  description: `Set the ${componentName} background to be light colored`,
  default: "false"
})

export const fontSize = ({componentName, defaultSize}: apiHelperProps & {defaultSize?: SizeTypes}):IApiItem => ({
  property: "fontSize",
  type: <a href="/overview">FontSize</a>,
  description: `Set the font size of ${componentName}`,
  default: defaultSize
})

export const outlined= ({componentName}: apiHelperProps):IApiItem => ({
  property: "outlined",
  type: "boolean",
  description: `Set the ${componentName} style to be outlined`,
  default: "false"
})

export const rounded = ({componentName}: apiHelperProps):IApiItem => ({
  property: "rounded",
  type: "boolean",
  description: `Set the ${componentName} edges to be rounded`,
  default: "false"
})

export const variant = ({componentName}: apiHelperProps):IApiItem => ({
  property: "variant",
  type: <a href="/overview">variant</a>,
  description: `Set the color variant of the ${componentName}`,
  default: "primary"
})

export const onClick = (): IApiItem => ({
  property: "onClick",
  type: "function",
  description:<>
    <p>
      Set the handler of the click event
    </p>
    <b>Signature </b>
    <code>(event) =&gt; void;</code>
  </>,
})

export const isLoading = ({componentName}: apiHelperProps):IApiItem => ({
  property: "isLoading",
  type: "boolean",
  description: `Set the ${componentName} state to be loading`,
  default: "false"
})