import React, { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import CSS from 'csstype';

/**
 * All CSS values are available for the CSS properties below
 */
export interface FlexWrapperProps {
  /**
   * Sets how items are placed in the flex container,
   * defining the main axis and the direction (optional)
   */
  flexDirection?: CSS.Property.FlexDirection;
  /**
   * Controls alignment of flex items on the main axis (optional)
   */
  justifyContent?: CSS.Property.JustifyContent;
  /**
   * Controls alignment of flex items on the cross axis (optional)
   */
  alignItems?: CSS.Property.AlignItems;
  /**
   * Provides spacing for flex items based on DefaultTheme values (optional)
   */
  gap?: keyof DefaultTheme['ws'];
  /**
   * The content to display inside the FlexWrapper
   */
  children: ReactNode;
}

const StyledFlexWrapper = styled.div<FlexWrapperProps>`
display: flex;
flex-direction: ${({ flexDirection }) => flexDirection};
justify-content: ${({ justifyContent }) => justifyContent};
align-items: ${({ alignItems }) => alignItems};
gap: ${({ theme, gap }) => theme.ws[gap]};

`;

const FlexWrapper = ({
  flexDirection, justifyContent, alignItems, gap, children,
}: FlexWrapperProps): JSX.Element => (
  <StyledFlexWrapper
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
    gap={gap}
  >
    {children}
  </StyledFlexWrapper>
);

FlexWrapper.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'baseline',
  gap: null,
};

/**
 * @component FlexWrapper
 * A flexible layout container for arranging child elements.
 */
export default FlexWrapper;
