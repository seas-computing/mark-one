import { ReactNode } from 'react';
import styled from 'styled-components';

interface StatProps {
  /**
   * The data or statistics to be styled by this component
   */
  children: ReactNode;
}

const StyledStat = styled.span<StatProps>`
  font-family: ${({ theme }): string => theme.font.data.family};
  font-size: ${({ theme }): string => theme.font.data.size};
  font-weight: ${({ theme }): string => theme.font.data.weight};
`;

/**
 * @component Stat
 * Style inline text representing data or statistics
 */
export default StyledStat;
