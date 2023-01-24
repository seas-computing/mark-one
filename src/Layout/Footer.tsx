import { ReactNode, ReactElement } from 'react';
import styled, { withTheme } from 'styled-components';

export interface FooterProps {
  /**
   * Allows for applying a custom background color
   * @default "transparent"
   */
  background?: string;
  /** Footer contents */
  children?: ReactNode;
  /**
   * Pass in a custom value for justify-content
   * @default space-between
   */
  justify?: string;
}

/**
 * A full-width footer to be displayed at the bottom of the page
 */
const Footer = styled.main<FooterProps>`
  align-items: baseline;
  background-color: ${({ background }) => background};
  display: flex;
  justify-content: ${({ justify }) => justify};
  padding: ${({ theme }) => `${theme.ws.medium} ${theme.ws.small}`};
  width: 100%;
`;

Footer.defaultProps = {
  background: 'transparent',
  justify: 'space-between',
};

declare type Footer = ReactElement<FooterProps>;

export default withTheme(Footer);
