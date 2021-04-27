import * as React from 'react'
import styled from 'styled-components'
import { ITableColumn, TableProps, TableStyleProps } from './Table.types'
import { lighten } from '../../utils/themeHelpers'

const StyledTable = styled.div<TableStyleProps>((props) => {
  const { colors, spacing, fontSize } = props.theme
  const { striped, variant = 'primary' } = props
  return {
    width: '100%',
    fontSize: fontSize.xs,
    color: colors.text.main,
    table: {
      width: '100%',
      textAlign: 'left',
      borderCollapse: 'collapse',
      position: 'relative'
    },
    'th, td': {
      padding: spacing.s
    },
    th: {
      color: lighten(colors.text.main, 0.4)
    },
    thead: {
      borderBottom: `${colors.border.main} 1px solid`
    },
    ...(striped
      ? {
          'tr:nth-child(even)': {
            backgroundColor: lighten(colors[variant].light, 0.6)
          }
        }
      : {
          tr: {
            borderBottom: `${colors.border.main} 1px solid`
          }
        })
  }
})

export function Table<T>({
  columns = [],
  data = [],
  ...restProps
}: TableProps<T>): React.ReactElement {
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
        {Object.keys(columns).map((key, colIndex) => (
          <td key={`row.${dIndex}.${key}`}>
            {columns[colIndex].content(d) || '-'}
          </td>
        ))}
      </tr>
    ))
  }, [data])

  return (
    <StyledTable {...restProps}>
      <table>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableCells}</tbody>
      </table>
    </StyledTable>
  )
}
