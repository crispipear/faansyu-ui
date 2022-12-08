import { Variant, BaseComponentProps } from '../../fs.types'

export interface ITableColumn<T> {
  header: string;
  key: string;
  content: (c: T) => React.ReactNode;
  width?: number | string;
}

export interface TableStyleProps {
  light?: boolean;
  variant?: Variant;
  striped?: boolean;
}

export interface TableProps<T> extends
  React.TableHTMLAttributes<HTMLTableElement>,
  TableStyleProps,
  BaseComponentProps {
  data: Array<T>;
  columns: ITableColumn<T>[];
}
