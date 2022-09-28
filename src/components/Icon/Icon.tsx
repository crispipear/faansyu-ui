import React from 'react'
import styled from 'styled-components'
import { IconNames, IconSizes } from './Icon.types'
import { Variant, BaseComponentProps } from '../../fs.types'
import Directory from './iconsDirectory'

export interface IconProps extends BaseComponentProps {
  name?: IconNames;
  variant?: Variant;
  size?: IconSizes;
}

const StyledIcon = styled.span<IconProps>((props) => {
  const { colors, fontSize } = props.theme
  const { variant } = props
  return {
    svg: {
      fill: variant ? colors[variant].main : colors.text.main,
      width: fontSize.s,
      height: fontSize.s
    }
  }
})

export function Icon({
  children,
  name,
  ...restProps
}: IconProps): React.ReactElement {
  return (
    <StyledIcon
      dangerouslySetInnerHTML={name ? { __html: Directory[name] } : undefined}
      {...restProps}
    >
      {children}
    </StyledIcon>
  )
}
