import { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionHeadingProps {
  /**
   * The content to display inside the Subheading
   */
  children: ReactNode;
}

const StyledSectionSubHeading = styled.h3<SectionHeadingProps>`
  color: ${({ theme }): string => theme.color.text.dark};
  font-family: ${({ theme }): string => theme.font.subheading.family};
  font-size: ${({ theme }): string => theme.font.subheading.size};
  font-weight: ${({ theme }): string => theme.font.subheading.weight};
  margin-top: ${({ theme }): string => theme.ws.medium};
  margin-bottom: ${({ theme }): string => theme.ws.small};
`;

/**
 * @component SectionSubHeading
 * Render a section subheading on the Mark One Heading styles
 */
export default StyledSectionSubHeading;
