import * as React from 'react'
import styled from 'styled-components'
import { VariantTypes, ShadeTypes, BaseComponentProps } from '../fs.types'
import { textColor } from '../utils/cssUtils'

interface ChipProps extends BaseComponentProps {
  variant?: VariantTypes
  shade?: ShadeTypes
}

const Chip = styled.span<ChipProps>((props) => {
  const { colors, spacing, fontSize, borderRadius } = props.theme
  const { variant = 'primary', shade = 'main' } = props
  return {
    backgroundColor: colors[variant][shade],
    color: textColor(colors[variant], false),
    padding: `${spacing.xxs} ${spacing.xs}`,
    margin: `0 ${spacing.xs} ${spacing.xs} 0`,
    fontSize: fontSize.xs,
    fontWeight: 500,
    display: 'inline-block',
    borderRadius
  }
})

function ChipComponent({
  children,
  variant,
  shade,
  style
}: ChipProps): React.ReactElement {
  return (
    <Chip className='fsui-chip' variant={variant} shade={shade} style={style}>
      {children}
    </Chip>
  )
}

export default ChipComponent
