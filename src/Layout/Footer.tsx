import { ReactNode, ReactElement } from 'react';
import styled, { withTheme } from 'styled-components';
import CSS from 'csstype';

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
  /**
   * Pass in a custom value for position
   * @default sticky
   */
  position?: CSS.Property.Position;
}

/**
 * A full-width footer to be displayed at the bottom of the page
 */
const Footer = styled.footer<FooterProps>`
  align-items: baseline;
  background: ${({ theme }) => theme.color.background.light};
  display: flex;
  justify-content: ${({ justify }) => justify};
  padding: ${({ theme }) => `${theme.ws.medium} ${theme.ws.small}`};
  width: 100%;
  position: ${({ position }) => position};
  bottom: 0;
  font-size: ${({ theme }) => `${theme.font.base.size}`};
  font-weight: ${({ theme }) => `${theme.font.base.weight}`};
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 0 0.5rem;
      border-right: 1px solid black;
      &:last-of-type {
        border: 0px;
      }
  };
`;

Footer.defaultProps = {
  background: 'transparent',
  justify: 'space-between',
  position: 'sticky',
};

declare type Footer = ReactElement<FooterProps>;

export default withTheme(Footer);
