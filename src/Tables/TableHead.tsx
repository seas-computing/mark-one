import styled from 'styled-components';
import { ReactElement, ForwardRefExoticComponent } from 'react';
import { fromTheme } from '../Theme';
import TableRow from './TableRow';

export interface TableHeadProps {
  /** Our TableRow functional component serves as the children for TableHead */
  children: TableRow | TableRow[];
}

const StyledTableHead = styled.thead<TableHeadProps>`
  background-color: ${fromTheme('color', 'background', 'medium')};
  position: sticky;
  top: 0;
  z-index: 1;

 :after,
 :before {
  position: absolute;
  width: 100%;
 }

 :before {
   top: -1px;
   border-top: 2px solid #c0c0c0;
 }

 :after {
   bottom: -2px;
   border-bottom: 2px solid #c0c0c0;
 }

`;

/**
 * @component
 * Renders a <thead> component to be used inside of a <Table>
 */

const TableHead:
ForwardRefExoticComponent<TableHeadProps> = StyledTableHead;

declare type TableHead = ReactElement<TableHeadProps>;

export default TableHead;
