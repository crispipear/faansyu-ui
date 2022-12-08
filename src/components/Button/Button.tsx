import * as React from 'react'
import styled from 'styled-components'
import { Variant, BaseComponentProps } from '../../fs.types'
import { Loader } from '../Loader'
import {
  textColor,
  borderColor,
  backgroundColor,
  activeColor,
  hoverColor
} from '../../utils/cssUtils'

export interface ButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  BaseComponentProps {
  clear?: boolean;
  disabled?: boolean;
  external?: boolean;
  href?: string;
  light?: boolean;
  isLoading?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  target?: string;
  variant?: Variant;
}

const StyledButton = styled.button<ButtonProps>((props) => {
  const { colors, spacing, fontSize, borderRadius } = props.theme
  const { clear, disabled, light, isLoading, outlined, rounded } = props
  const variant = disabled ? 'disabled' : props.variant || 'primary'
  const cursor = disabled ? 'not-allowed' : isLoading ? 'default' : 'pointer'

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    cursor,
    position: 'relative',
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
    textDecoration: 'none',
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
  external,
  href,
  target,
  onClick,
  ...restProps
}: ButtonProps): React.ReactElement {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    if (onClick && !restProps.isLoading && !restProps.disabled) {
      onClick(e)
    }
  }
  return (
    <StyledButton
      onClick={handleClick}
      {...restProps}
      as={href ? 'a' : 'button'}
      href={href}
      target={external ? '_blank' : target}
    >
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
