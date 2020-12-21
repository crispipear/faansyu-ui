import React from 'react'
import styled from 'styled-components'
import { SizeTypes, VariantTypes, BaseComponentProps } from '../fs.types'

interface TextProps extends BaseComponentProps {
  fontSize?: SizeTypes
  color?: VariantTypes
}

const Text = styled.span<TextProps>((props) => {
  const { colors, fontSize } = props.theme
  return {
    fontSize: props.fontSize ? fontSize[props.fontSize] : fontSize.s,
    fontWeight: 400,
    color: props.color ? colors[props.color].main : colors.text.main
  }
})

function TextComponent({
  children,
  ...restProps
}: TextProps): React.ReactElement {
  return (
    <Text className='fsui-text' {...restProps}>
      {children}
    </Text>
  )
}

export default TextComponent
