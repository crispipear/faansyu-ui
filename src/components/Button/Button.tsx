import * as React from 'react'
import styled from 'styled-components'
import { VariantTypes, BaseComponentProps } from '../../fs.types'
import { Loader } from '../Loader'
import {
  textColor,
  borderColor,
  backgroundColor,
  activeColor,
  hoverColor
} from '../../utils/cssUtils'

export interface ButtonProps extends BaseComponentProps {
  clear?: boolean
  disabled?: boolean
  light?: boolean
  isLoading?: boolean
  outlined?: boolean
  rounded?: boolean
  variant?: VariantTypes
  onClick?: React.MouseEventHandler<HTMLElement>
}

const StyledButton = styled.button<ButtonProps>((props) => {
  const { colors, spacing, fontSize, borderRadius } = props.theme
  const { clear, disabled, light, isLoading, outlined, rounded } = props
  const variant = disabled ? 'disabled' : props.variant || 'primary'
  const cursor = disabled ? 'not-allowed' : isLoading ? 'progress' : 'pointer'

  return {
    cursor,
    position: 'relative',
    outline: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: rounded ? borderRadius : '4px',
    borderColor: borderColor(colors[variant], outlined),
    backgroundColor: backgroundColor(colors[variant], light, outlined || clear),
    color: textColor(colors[variant], light, outlined || clear),
    padding: `${spacing.xs} ${spacing.s}`,
    fontSize: fontSize.s,
    fontWeight: 500,
    transition: 'all 0.16s',
    ...(!disabled &&
      !isLoading && {
        '&:hover': {
          backgroundColor: hoverColor(colors[variant], light, outlined || clear)
        },
        '&:active': {
          backgroundColor: activeColor(
            colors[variant],
            light,
            outlined || clear
          )
        }
      })
  }
})

export function Button({
  children,
  onClick,
  ...restProps
}: ButtonProps): React.ReactElement {
  function handleClick(e: React.MouseEvent<HTMLElement>): void {
    if (onClick && !restProps.isLoading && !restProps.disabled) {
      onClick(e)
    }
  }
  return (
    <StyledButton onClick={handleClick} {...restProps}>
      {restProps.isLoading && (
        <Loader
          clear={restProps.clear || restProps.outlined}
          light={restProps.light}
        />
      )}
      {children}
    </StyledButton>
  )
}
