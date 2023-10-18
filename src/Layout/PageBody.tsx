import { ReactNode, ReactElement } from 'react';
import styled, { withTheme } from 'styled-components';
import { fromTheme } from '../Theme';

export interface PageBodyProps {
  /** Page contents */
  children?: ReactNode;
  /** Bottom padding of the page body */
  paddingBottom?: string;
}

const PageBody = styled.main<PageBodyProps>`
  margin: ${fromTheme('ws', 'small')};
  padding-bottom: ${({ paddingBottom, theme }): string => (paddingBottom || theme.ws.xlarge)};
`;

declare type PageBody = ReactElement<PageBodyProps>;

export default withTheme(PageBody);
