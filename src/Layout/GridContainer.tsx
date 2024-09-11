import styled from 'styled-components';
import React, { ReactNode } from 'react';

type Width = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Placement = 'left' | 'center' | 'right' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

interface GridContainerProps {
  /**
   * The number of columns covered by the element in our 12-column grid.
   * Must be within 1-12.
   */
  width: Width;
  /**
   * Where in the grid the element should appear.
   * Valid values are `left`, `center`, `right`, or a value between 1-11,
   * representing the first column on which the element should appear.
   */
  placement: Placement;
  /**
   * The content to display inside the GridContainer
   */
  children: ReactNode;
}

export const getGridColumnStyles = (
  placement: Placement, width: Width
): string => {
  switch (placement) {
    case 'left':
      return `span ${width}`;
    case 'center': {
      const startColumn = Math.floor((12 - width) / 2) + 1;
      return `${startColumn} / span ${width}`;
    }
    case 'right': {
      const endColumn = 13 - width;
      return `${endColumn} / span ${width}`;
    }
    default:
      return `${placement} / span ${width}`;
  }
};

const StyledGridContainer = styled.div<Pick<GridContainerProps, 'placement' | 'width' >>`
  grid-column: ${({ placement, width }) => getGridColumnStyles(placement, width)}; 
`;

const GridContainer = ({
  width,
  placement,
  children,
}: GridContainerProps): JSX.Element => (
  <StyledGridContainer
    width={width}
    placement={placement}
  >
    {children}
  </StyledGridContainer>
);

export default GridContainer;
