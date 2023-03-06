import styled from 'styled-components';
import { ReactElement, ForwardRefExoticComponent } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

export interface TableProps {
  /**
  * Internal table components like <thead>, <tbody>, <col>. and <colgroup>
  * including their respective child components
  */
  children: (TableHead | TableBody | HTMLTableColElement)
  | (TableHead | TableBody | HTMLTableColElement)[];
}

// const StyledTable = styled.table<TableProps>`
//     border-collapse: separate;
//     border-spacing: 0;
//     width: 100%;
//
// `;
const StyledTable = styled.table<TableProps>`
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    & thead {
      & th {
        border: none;
      }
      & tr > th {
        border-top: 2px solid #A2A2A2;
        border-right: 2px solid #A2A2A2;
      }
      & tr > th:first-of-type {
        border-left: 2px solid #A2A2A2;
      }
      & tr > th[rowspan]:not([rowspan='1']) {
        border-bottom: 2px solid #A2A2A2;
      }
      & tr:last-of-type > th {
        border-bottom: 2px solid #A2A2A2;
      }
    }
    & tbody {
      & tr > td, th {
        border: none;
      }
      & tr > *:first-child {
        border-left: 2px solid #A2A2A2;
      }
      & tr > :is(td,th) {
        border-right: 2px solid #A2A2A2;
      }
      & tr:last-of-type > :is(td,th) {
        border-bottom: 2px solid #A2A2A2;
      }
    }
`;

/**
 * @component
 * Renders a simple, full-width <table>
 */

const Table: ForwardRefExoticComponent<TableProps> = StyledTable;

declare type Table = ReactElement<TableProps>;

export default Table;
