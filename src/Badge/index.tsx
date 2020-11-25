import * as React from 'react'
import styled from 'styled-components'
import { ColorVariants } from '../yam.types'

interface Props {
  text?: string
  variant?: ColorVariants
}

const Badge = styled.span<{ variant: ColorVariants }>((props) => {
  const { colors, spacing, fontSize, borderRadius } = props.theme
  return {
    backgroundColor: colors[props.variant],
    color: 'white',
    padding: `${spacing.xxs} ${spacing.xs}`,
    fontSize: fontSize.xs,
    fontWeight: 500,
    display: 'inline-block',
    borderRadius
  }
})

function BadgeComponent({
  text,
  variant = 'primary'
}: Props): React.ReactElement {
  return <Badge variant={variant}>{text}</Badge>
}

export default BadgeComponent
