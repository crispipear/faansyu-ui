import React from 'react'
import styled from 'styled-components'
import { SizeTypes, VariantTypes, BaseComponentProps } from '../fs.types'

interface ParagraphProps extends BaseComponentProps {
  fontSize?: SizeTypes
  color?: VariantTypes
}

const Paragraph = styled.p<ParagraphProps>((props) => {
  const { colors, spacing, fontSize } = props.theme
  return {
    fontSize: props.fontSize ? fontSize[props.fontSize] : fontSize.s,
    fontWeight: 400,
    color: props.color ? colors[props.color].main : colors.text.main,
    lineHeight: 1.8,
    margin: `0 0 ${spacing.s}`
  }
})

function ParagraphComponent({
  children,
  ...restProps
}: ParagraphProps): React.ReactElement {
  return (
    <Paragraph className='fsui-paragraph' {...restProps}>
      {children}
    </Paragraph>
  )
}

export default ParagraphComponent
