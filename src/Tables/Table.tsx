import styled from 'styled-components';
import { ReactElement, ForwardRefExoticComponent } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { fromTheme } from '../Theme';

export interface TableProps {
  /**
  * Internal table components like <thead>, <tbody>, <col>. and <colgroup>
  * including their respective child components
  */
  children: (TableHead | TableBody | HTMLTableColElement)
  | (TableHead | TableBody | HTMLTableColElement)[];
}

const StyledTable = styled.table<TableProps>`
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    & thead {
      & th {
        border: none;
      }
      & tr > th {
        border-top: ${({ theme }): string => theme.border.light};
        border-right: ${({ theme }): string => theme.border.light};
      }
      & tr > th:first-of-type {
        border-left: ${({ theme }): string => theme.border.light};
      }
      & tr > th[rowspan]:not([rowspan='1']) {
        border-bottom: ${({ theme }): string => theme.border.light};
      }
      & tr:last-of-type > th {
        border-bottom: ${({ theme }): string => theme.border.light};
      }
    }
    & tbody {
      & tr > td, th {
        border: none;
      }
      & tr > *:first-child {
        border-left: ${({ theme }): string => theme.border.light};
      }
      & tr > :is(td,th) {
        border-right: ${({ theme }): string => theme.border.light};
      }
      & tr:last-of-type > :is(td,th) {
        border-bottom: ${({ theme }): string => theme.border.light};
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
