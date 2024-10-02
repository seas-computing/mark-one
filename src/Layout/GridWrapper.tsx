import React, { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface GridWrapperProps {
  /**
   * Optional gap size to override the default and responsive gap sizes
   */
  gap?: keyof DefaultTheme['ws'];
  /**
   * The content to display inside the GridWrapper
   */
  children: ReactNode;
}

const StyledGridWrapper = styled.div<GridWrapperProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme, gap }) => theme.ws[gap || 'small']};

  @media (max-width: 768px) {
    gap: ${({ theme, gap }) => theme.ws[gap || 'xsmall']}; /* Smaller gap for mobile devices */
  }
`;

const GridWrapper = ({ children, gap }: GridWrapperProps): JSX.Element => (
  <StyledGridWrapper gap={gap}>
    {children}
  </StyledGridWrapper>
);

GridWrapper.defaultProps = {
  gap: null,
};

/**
 *  @component GridWrapper
 *  The top-level of the grid structure, it defines the 12-column grid.
 */
export default GridWrapper;
