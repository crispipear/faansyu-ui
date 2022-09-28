import React from 'react'
import styled from 'styled-components'
import { Size, Variant, BaseComponentProps, FontWeight } from '../../fs.types'

export interface TextProps extends BaseComponentProps {
  fontSize?: Size;
  color?: Variant;
  fontWeight?: FontWeight;
}

const StyledText = styled.span<TextProps>((props) => {
  const { colors, fontSize } = props.theme
  return {
    fontSize: props.fontSize ? fontSize[props.fontSize] : fontSize.s,
    fontWeight: props.fontWeight || 400,
    color: props.color ? colors[props.color].main : colors.text.main
  }
})

export function Text({
  children,
  ...restProps
}: TextProps): React.ReactElement {
  return (
    <StyledText className='fsui-text' {...restProps}>
      {children}
    </StyledText>
  )
}
