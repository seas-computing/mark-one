import styled from 'styled-components';
import React, { ReactNode, CSSProperties } from 'react';

type Width = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Placement = 'left' | 'center' | 'right' | Exclude<Width, 12>;

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

const getGridColumnStyles = (placement: Placement, width: Width) => {
  switch (placement) {
    case 'left':
      return `grid-column: span ${width};`;
    case 'center': {
      const startColumn = Math.floor((12 - width) / 2) + 1;
      return `grid-column: ${startColumn} / span ${width};`;
    }
    case 'right': {
      const endColumn = 13 - width;
      return `grid-column: ${endColumn} / span ${width};`;
    }
    default:
      return `grid-column: ${placement} / span ${width};`;
  }
};

const StyledGridContainer = styled.div<Pick<GridContainerProps, 'placement' | 'width'>>`
  ${({ placement, width }) => getGridColumnStyles(placement, width)};
  
`;

const GridContainer = ({
  width,
  placement,
  children,
}: GridContainerProps): JSX.Element => (
  <StyledGridContainer width={width} placement={placement}>
    {children}
  </StyledGridContainer>
);

export default GridContainer;
