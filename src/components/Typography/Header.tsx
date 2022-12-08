import React from 'react'
import styled from 'styled-components'
import {
  Sizes,
  Size,
  Variant,
  BaseComponentProps
} from '../../fs.types'

export interface HeaderProps extends
  React.HTMLAttributes<HTMLHeadingElement>,
  BaseComponentProps {
  fontSize?: Size;
  color?: Variant;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const getMargins = (spacing: Sizes, fontSize: Size): string => {
  switch (fontSize) {
    case 'xxs':
    case 'xs':
    case 's':
      return `${spacing.s} 0 ${spacing.xs} 0`
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
  anchor,
  className,
  ...restProps
}: HeaderProps): React.ReactElement {
  const anchorProps = anchor ? {
    id: children?.toString().replace(/\s/g, '')
  } : {};

  const classNamesWithAnchor = className ? `${className} anchor` : 'anchor';
  const classNames = anchor ? classNamesWithAnchor : className;

  return (
    <StyledHeader
      as={tag}
      className={classNames}
      {...anchorProps}
      {...restProps}
    >
      {children}
    </StyledHeader>
  )
}
