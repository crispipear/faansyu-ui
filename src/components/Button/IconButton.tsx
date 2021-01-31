import * as React from 'react'
import styled from 'styled-components'
import { VariantTypes, BaseComponentProps } from '../../fs.types'
import { IconNames } from '../Icon/Icon.types'
import { Icon } from '../Icon'
import {
  textColor,
  borderColor,
  backgroundColor,
  activeColor,
  hoverColor
} from '../../utils/cssUtils'

export interface IconButtonProps extends BaseComponentProps {
  name?: IconNames
  variant?: VariantTypes
  clear?: boolean
  light?: boolean
  outlined?: boolean
  rounded?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
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
  function handleClick(e: React.MouseEvent<HTMLElement>): void {
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
