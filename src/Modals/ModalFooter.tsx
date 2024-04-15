import { PropsWithChildren, ReactElement } from 'react';
import styled, { withTheme } from 'styled-components';

const ModalFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: ${({ theme }): string => `${theme.ws.small} ${theme.ws.medium}`};
  width: 100%;
`;

declare type ModalFooter = ReactElement<PropsWithChildren>;

/**
 * @component ModalFooter
 * Used within the Modal component to render a separated bottom section,
 * typically containing buttons for save, cancel, etc.
 */
export default withTheme(ModalFooter);
