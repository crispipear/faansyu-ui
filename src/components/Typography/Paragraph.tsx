import React from 'react'
import styled from 'styled-components'
import { Size, Variant, BaseComponentProps } from '../../fs.types'

export interface ParagraphProps extends BaseComponentProps {
  fontSize?: Size;
  color?: Variant;
}

const StyledParagraph = styled.p<ParagraphProps>((props) => {
  const { colors, spacing, fontSize } = props.theme
  return {
    fontSize: props.fontSize ? fontSize[props.fontSize] : fontSize.s,
    fontWeight: 400,
    color: props.color ? colors[props.color].main : colors.text.main,
    lineHeight: 1.8,
    margin: `0 0 ${spacing.s}`
  }
})

export function Paragraph({
  children,
  ...restProps
}: ParagraphProps): React.ReactElement {
  return <StyledParagraph {...restProps}>{children}</StyledParagraph>
}
