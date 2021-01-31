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
      ? `0 ${spacing[gap]} 0 0`
      : direction === 'column'
      ? `0 0 ${spacing[gap]} 0`
      : 0

  return {
    display: 'inline-flex',
    flexDirection: direction,
    '>.fsui-spacer-item:not(:last-child)': {
      margin
    }
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

  return (
    <StyledSpacer className='fsui-spacer' {...restProps}>
      {items}
    </StyledSpacer>
  )
}
