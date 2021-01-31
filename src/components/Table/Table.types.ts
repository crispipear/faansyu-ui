import { VariantTypes, BaseComponentProps } from '../../fs.types'

export interface ITableColumn<T> {
  header: string
  key: string
  content: (c: T) => React.ReactNode
  width?: number | string
}

export interface TableStyleProps {
  light?: boolean
  variant?: VariantTypes
  rounded?: boolean
}

export interface TableProps<T> extends BaseComponentProps {
  data: Array<T>
  columns: ITableColumn<T>[]
}
