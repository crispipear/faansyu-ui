import * as React from 'react'
import styled from 'styled-components'
import { ButtonProps } from './Button'
import { IconNames } from '../Icon/Icon.types'
import { Icon } from '../Icon'
import {
  textColor,
  borderColor,
  backgroundColor,
  activeColor,
  hoverColor
} from '../../utils/cssUtils'

export type IconButtonProps = Omit<ButtonProps, 'rounded'> & {
  name?: IconNames
}

const StyledIconButton = styled.button<IconButtonProps>((props) => {
  const { colors, fontSize } = props.theme
  const { variant = 'primary', outlined, light, clear = true } = props
  const iconColor = textColor(colors[variant], light || clear, outlined)
  return {
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',
    display: 'inline-block',
    lineHeight: 1,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '50%',
    borderColor: borderColor(colors[variant], outlined),
    backgroundColor:
      clear && !light
        ? 'transparent'
        : backgroundColor(colors[variant], light, outlined),
    padding: 0,
    width: fontSize.l,
    height: fontSize.l,
    fontWeight: 500,
    transition: 'all 0.16s',
    '&:hover': {
      backgroundColor: hoverColor(
        colors[variant],
        light,
        clear ? true : outlined
      )
    },
    '&:active': {
      backgroundColor: activeColor(
        colors[variant],
        light,
        clear ? true : outlined
      )
    },
    svg: {
      fill: iconColor
    }
  }
})

export function IconButton({
  children,
  name,
  onClick,
  ...restProps
}: IconButtonProps): React.ReactElement {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <StyledIconButton
      className='fsui-icon-button'
      onClick={handleClick}
      {...restProps}
    >
      <Icon name={name} />
    </StyledIconButton>
  )
}
