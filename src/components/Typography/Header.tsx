import React from 'react'
import styled from 'styled-components'
import { SizeTypes, VariantTypes, BaseComponentProps } from '../../fs.types'

export interface HeaderProps extends BaseComponentProps {
  fontSize?: SizeTypes
  color?: VariantTypes
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const StyledHeader = styled.div<HeaderProps>((props) => {
  const { colors, spacing, fontSize } = props.theme
  return {
    fontSize: props.fontSize ? fontSize[props.fontSize] : fontSize.l,
    margin: `${spacing.m} 0 ${spacing.s} 0`,
    fontWeight: 500,
    color: props.color ? colors[props.color].main : colors.text.main
  }
})

export function Header({
  children,
  tag = 'h1',
  ...restProps
}: HeaderProps): React.ReactElement {
  return (
    <StyledHeader className='fsui-header' as={tag} {...restProps}>
      {children}
    </StyledHeader>
  )
}
