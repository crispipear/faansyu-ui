import React from 'react'
import styled from 'styled-components'
import {
  Sizes,
  SizeTypes,
  VariantTypes,
  BaseComponentProps
} from '../../fs.types'

export interface HeaderProps extends BaseComponentProps {
  fontSize?: SizeTypes;
  color?: VariantTypes;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  anchorText?: string;
}

const getMargins = (spacing: Sizes, fontSize: SizeTypes): string => {
  switch (fontSize) {
    case 'xxs':
    case 'xs':
    case 's':
      return `${spacing.m} 0 ${spacing.xs} 0`
    default:
      return `${spacing.m} 0 ${spacing.s} 0`
  }
}

const StyledHeader = styled.div<HeaderProps>((props) => {
  const { colors, spacing, fontSize } = props.theme
  const margin = getMargins(spacing, props.fontSize || 'l')

  return {
    margin,
    fontWeight: 600,
    color: props.color ? colors[props.color].main : colors.text.main,
    ...(props.fontSize && {
      fontSize: fontSize[props.fontSize]
    })
  }
})

export function Header({
  children,
  tag = 'h1',
  anchorText,
  ...restProps
}: HeaderProps): React.ReactElement {
  return (
    <StyledHeader as={tag} id={anchorText} {...restProps}>
      {children}
    </StyledHeader>
  )
}
