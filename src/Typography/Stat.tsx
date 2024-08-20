import { ReactNode } from 'react';
import styled from 'styled-components';

interface StatProps {
  /**
   * The data or statistics to be styled by this component
   */
  children: ReactNode;
}

const StyledStat = styled.div<StatProps>`
  font-family: ${({ theme }): string => theme.font.data.family};
`;

/**
 * @component Stat
 * Style inline text representing data or statistics
 */
export default StyledStat;
