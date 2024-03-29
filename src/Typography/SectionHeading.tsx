import { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionHeadingProps {
  /**
   * The content to display inside the Heading
   */
  children: ReactNode;
}

const StyledSectionHeading = styled.h2<SectionHeadingProps>`
  border-bottom: ${({ theme }): string => (theme.border.hairline)};
  color: ${({ theme }): string => (theme.color.text.dark)};
  font-family: ${({ theme }): string => (theme.font.heading.family)}; 
  font-size: ${({ theme }): string => (theme.font.heading.size)};
  font-weight: ${({ theme }): string => (theme.font.heading.weight)}; 
  width: 100%;
`;

/**
 * @component SectionHeading
 * Render a section heading based on the Mark One Heading styles
 */
export default StyledSectionHeading;
