import { PropsWithChildren, ReactElement } from 'react';
import styled, { withTheme } from 'styled-components';

const ModalBody = styled.div`
  padding: ${({ theme }): string => theme.ws.medium};
  overflow: auto;
`;

declare type ModalBody = ReactElement<PropsWithChildren>;

/**
 * @component ModalBody
 * Used within the Modal component to provide appropriate spacing in line with
 * the ModalHeader and ModalFooter components.
 */
export default withTheme(ModalBody);
