import styled from 'styled-components';
import { ReactElement, ForwardRefExoticComponent } from 'react';
import { fromTheme } from '../Theme';
import TableRow from './TableRow';

export interface TableHeadProps {
  /** Implements TableHeadingCell to stick while the tablebody is scrolled  */
  isSticky?: boolean;
  /** Our TableRow functional component serves as the children for TableHead */
  children: TableRow | TableRow[];
}

const StyledTableHead = styled.thead<TableHeadProps>`
  background-color: ${fromTheme('color', 'background', 'medium')};
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'inherit')};
  top: ${({ isSticky }) => (isSticky ? '0' : '1')};
  z-index: 1;
  box-shadow: ${({ isSticky }) => (isSticky ? 'inset 0 2px 0 #808080, inset 0 -2px 0 #808080' : '')};
`;

/**
 * @component
 * Renders a <thead> component to be used inside of a <Table>
 */

const TableHead:
ForwardRefExoticComponent<TableHeadProps> = StyledTableHead;

declare type TableHead = ReactElement<TableHeadProps>;

export default TableHead;
