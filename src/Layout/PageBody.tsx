import { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';
import { fromTheme } from '../Theme';

export interface PageBodyProps {
  /** Page contents */
  children?: ReactNode;
  /** Padding of the page body */
  padding?: string;
}

const PageBody = styled.main<PageBodyProps>`
  margin: ${fromTheme('ws', 'small')};
  padding: ${({ padding, theme }): string => (padding || `0 0 ${theme.ws.xlarge}`)};
`;

declare type PageBody = ReactElement<PageBodyProps>;

export default PageBody;
