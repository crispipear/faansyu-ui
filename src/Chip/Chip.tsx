import * as React from 'react'
import styled from 'styled-components'
import { ColorVariants, ShadeTypes, FsTheme } from '../fs.types'
import { fontColorByShade } from '../utils/fontColor'
interface StyleProps {
  variant?: ColorVariants
  shade?: ShadeTypes
}

interface Props extends StyleProps {
  text?: string
}

const Chip = styled.span<
  {
    theme: FsTheme
  } & StyleProps
>((props) => {
  const { colors, spacing, fontSize, borderRadius } = props.theme
  const { variant = 'primary', shade = 'main' } = props

  return {
    backgroundColor: colors[variant][shade],
    color: fontColorByShade(colors[variant], shade),
    padding: `${spacing.xxs} ${spacing.xs}`,
    margin: `0 0 ${spacing.xxs} ${spacing.xxs}`,
    fontSize: fontSize.xs,
    fontWeight: 500,
    display: 'inline-block',
    borderRadius
  }
})

function ChipComponent({ text, variant, shade }: Props): React.ReactElement {
  return (
    <Chip variant={variant} shade={shade}>
      {text}
    </Chip>
  )
}

export default ChipComponent
