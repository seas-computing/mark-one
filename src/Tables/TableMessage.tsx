import styled from 'styled-components';
import { fromTheme } from 'mark-one';

const TableMessage = styled.td`
  border: ${fromTheme('border', 'light')};
  border-top: none;
  text-align: center;
  font-weight: ${fromTheme('font', 'bold', 'weight')};
  font-size: ${fromTheme('font', 'bold', 'size')};
  font-family: ${fromTheme('font', 'bold', 'family')};
  padding: ${fromTheme('ws', 'medium')};
`;

/**
 * @Component TableMessage
 * A bolded table cell that spans a whole row or column to
 * show a message or prompt when no data is otherwise available.
 */
export default TableMessage;
