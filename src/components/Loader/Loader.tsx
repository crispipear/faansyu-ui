import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { VariantTypes, BaseComponentProps } from '../../fs.types'
import { textColor } from '../../utils/cssUtils'

export interface LoaderProps extends BaseComponentProps {
  variant?: VariantTypes
  light?: boolean
  clear?: boolean
}

const SpinAnimation = keyframes`  
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const StyledLoader = styled.div<LoaderProps>(
  (props) => {
    const { light, clear, variant = 'primary' } = props
    const { colors, spacing } = props.theme
    const color = textColor(colors[variant], light, clear)

    return {
      display: 'inline-block',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      marginRight: spacing.xxs,
      boxSizing: 'border-box',
      border: '2px solid',
      borderColor: `${color} ${color} ${color} transparent`
    }
  },
  css`
    animation: ${SpinAnimation} 1s linear infinite;
  `
)

export function Loader({
  children,
  ...restProps
}: LoaderProps): React.ReactElement {
  return <StyledLoader {...restProps}>{children}</StyledLoader>
}
