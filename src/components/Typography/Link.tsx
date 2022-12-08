import React from 'react'
import styled from 'styled-components'
import { Size, Variant, BaseComponentProps, FontWeight } from '../../fs.types'

export interface LinkProps extends
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  BaseComponentProps {
  fontSize?: Size;
  color?: Variant;
  fontWeight?: FontWeight;
}

const StyledLink = styled.a<LinkProps>((props) => {
  const { colors, fontSize } = props.theme
  return {
    fontSize: props.fontSize ? fontSize[props.fontSize] : fontSize.s,
    fontWeight: props.fontWeight || 400,
    color: props.color ? colors[props.color].main : colors.text.main
  }
})

export function Link({
  children,
  ...restProps
}: LinkProps): React.ReactElement {
  return (
    <StyledLink
      className='fsui-link'
      {...restProps}
    >
      {children}
    </StyledLink>
  )
}
