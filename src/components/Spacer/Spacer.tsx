import React from 'react'
import styled from 'styled-components'
import { BaseComponentProps, SizeTypes } from '../../fs.types'
import { toArray } from '../../utils/toArray'
export interface SpacerProps extends BaseComponentProps {
  gap?: SizeTypes
  direction?: 'column' | 'row'
}

const StyledSpacer = styled.div<SpacerProps>((props) => {
  const { spacing } = props.theme
  const { gap = 's', direction = 'row' } = props
  const margin =
    direction === 'row'
      ? {
          marginRight: spacing[gap]
        }
      : direction === 'column'
      ? {
          marginBottom: spacing[gap]
        }
      : {}
  return {
    display: 'inline-flex',
    flexDirection: direction,
    flexWrap: 'wrap',
    '>.fsui-spacer-item:not(:last-child)': {
      ...margin
    },
    ...(direction === 'row' && {
      '>.fsui-spacer-item': {
        marginBottom: spacing[gap]
      }
    })
  }
})

export function Spacer({
  children,
  ...restProps
}: SpacerProps): React.ReactElement {
  const childNodes = toArray(children)

  const items = React.useMemo(
    () =>
      childNodes.map((node: React.ReactNode, index: number) => (
        <div key={`spacer-item-${index}`} className='fsui-spacer-item'>
          {node}
        </div>
      )),
    [children]
  )

  return <StyledSpacer {...restProps}>{items}</StyledSpacer>
}
