import * as React from 'react'
import styled from 'styled-components'
import { VariantTypes, BaseComponentProps } from '../../fs.types'
import { textColor, borderColor, backgroundColor } from '../../utils/cssUtils'

export interface TagProps extends BaseComponentProps {
  light?: boolean
  variant?: VariantTypes
  outlined?: boolean
  rounded?: boolean
}

const StyledTag = styled.span<TagProps>((props) => {
  const { colors, spacing, fontSize, borderRadius } = props.theme
  const { variant = 'primary', rounded, outlined, light = !outlined } = props
  return {
    position: 'relative',
    display: 'inline-block',
    lineHeight: 1,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: rounded ? borderRadius : '4px',
    borderColor: borderColor(colors[variant], outlined),
    backgroundColor: backgroundColor(colors[variant], light, outlined),
    color: textColor(colors[variant], light, outlined),
    padding: spacing.xxs,
    fontSize: fontSize.xxs,
    fontWeight: 500
  }
})

export function Tag({ children, ...restProps }: TagProps): React.ReactElement {
  return <StyledTag {...restProps}>{children}</StyledTag>
}
