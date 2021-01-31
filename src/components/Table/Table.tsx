import * as React from 'react'
import styled from 'styled-components'
import { ITableColumn, TableProps, TableStyleProps } from './Table.types'
import { textColor, borderColor, backgroundColor } from '../../utils/cssUtils'

const StyledTable = styled.div<TableStyleProps>((props) => {
  const { colors, spacing, fontSize, borderRadius } = props.theme
  const { variant = 'primary' } = props
  return {
    width: '100%',
    fontSize: fontSize.xs,
    color: colors.text.main,
    table: {
      width: '100%',
      textAlign: 'left',
      borderCollapse: 'collapse'
    },
    'th, td': {
      padding: spacing.s,
      borderBottom: `${colors.border.main} 1px solid`
    }
    // position: 'relative',
    // display: 'inline-block',
    // lineHeight: 1,
    // borderWidth: '1px',
    // borderStyle: 'solid',
    // borderRadius: rounded ? borderRadius : '4px',
    // borderColor: borderColor(colors[variant], outlined),
    // backgroundColor: backgroundColor(colors[variant], light, outlined),
    // color: textColor(colors[variant], light, outlined),
    // padding: spacing.xxs,
    // fontWeight: 500
  }
})

export function Table<T>({
  columns,
  data,
  ...restProps
}: TableProps<T> & TableStyleProps): React.ReactElement {
  const tableHeaders = React.useMemo<React.ReactNode>(() => {
    return columns.map((c: ITableColumn<T>) => (
      <th key={`${c.key}`} style={{ width: c.width || '' }}>
        {c.header}
      </th>
    ))
  }, [columns])

  const tableCells = React.useMemo<React.ReactNode>(() => {
    return data.map((d, dIndex: number) => (
      <tr key={`row.${dIndex}`}>
        {Object.entries(d).map(([key, value]) => (
          <td key={key}>{value || '-'}</td>
        ))}
      </tr>
    ))
  }, [data])

  return (
    <StyledTable className='fsui-table' {...restProps}>
      <table>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableCells}</tbody>
      </table>
    </StyledTable>
  )
}
