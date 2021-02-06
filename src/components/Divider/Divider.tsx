import React from 'react'
import styled from 'styled-components'
import { BaseComponentProps } from '../../fs.types'

type DividerProps = BaseComponentProps

const Divider = styled.div((props) => {
  const { colors, spacing } = props.theme
  return {
    background: colors.border.main,
    margin: `${spacing.s} 0`,
    width: '100%',
    height: '1px'
  }
})

function DividerComponent({ style }: DividerProps): React.ReactElement {
  return <Divider style={style} />
}

export default DividerComponent
