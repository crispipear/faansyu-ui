import * as React from 'react'
import styled from 'styled-components'
import { VariantTypes, BaseComponentProps } from '../../fs.types'
import {
  textColor,
  borderColor,
  backgroundColor,
  activeColor,
  hoverColor
} from '../../utils/cssUtils'

export interface ButtonProps extends BaseComponentProps {
  variant?: VariantTypes
  light?: boolean
  outlined?: boolean
  rounded?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

const StyledButton = styled.button<ButtonProps>((props) => {
  const { colors, spacing, fontSize, borderRadius } = props.theme
  const { variant = 'primary', rounded, outlined, light } = props
  return {
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',
    display: 'inline-block',
    lineHeight: 1,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: rounded ? borderRadius : '4px',
    borderColor: borderColor(colors[variant], outlined),
    backgroundColor: backgroundColor(colors[variant], light, outlined),
    color: textColor(colors[variant], light, outlined),
    padding: `${spacing.xs} ${spacing.s}`,
    fontSize: fontSize.s,
    fontWeight: 500,
    transition: 'all 0.16s',
    '&:hover': {
      backgroundColor: hoverColor(colors[variant], light, outlined)
    },
    '&:active': {
      backgroundColor: activeColor(colors[variant], light, outlined)
    }
  }
})

export function Button({
  children,
  onClick,
  ...restProps
}: ButtonProps): React.ReactElement {
  function handleClick(e: React.MouseEvent<HTMLElement>): void {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <StyledButton className='fsui-button' onClick={handleClick} {...restProps}>
      {children}
    </StyledButton>
  )
}
