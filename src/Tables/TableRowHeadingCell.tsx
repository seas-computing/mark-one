import { ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';
import { ALIGN } from './TableCell';

export interface TableRowHeadingCellProps {
  /** Allows you to pass in a alignment property from the ALIGN enum */
  alignment?: ALIGN;
  /** Specifies the background color of the table cell */
  backgroundColor?: string;
  /** Text or components to be displayed in the table heading cell */
  children: ReactNode;
  /** Handles cells that span multiple columns */
  colSpan?: number;
  /** Handles cells that span multiple rows */
  rowSpan?: number;
  /** Specifies the group of cells that the row heading refers to */
  scope: 'row' | 'rowgroup' | 'auto';
}

const StyledTableHeadingCell = styled.th<TableRowHeadingCellProps>`
  border-left: ${({ theme }): string => (theme.border.light)};
  border-right: ${({ theme }): string => (theme.border.light)};
  font-weight: ${({ theme }): string => (theme.font.data.weight)};
  font-family: ${({ theme }): string => (theme.font.data.family)};
  font-size: ${({ theme }): string => (theme.font.data.size)};
  text-align: ${({ alignment }): string => alignment};
  background-color: ${({ backgroundColor }): string => backgroundColor};
`;

/**
 * @component
 * Renders a <th> element that is stylistically similar to the TableCell
 * component, for use as a row-level header.
 */
const TableRowHeadingCell = withTheme(StyledTableHeadingCell);

export default TableRowHeadingCell;