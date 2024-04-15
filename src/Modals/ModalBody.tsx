import { PropsWithChildren } from 'react';
import styled, { withTheme } from 'styled-components';

const StyledModalBody = styled.div<PropsWithChildren>`
  padding: ${({ theme }): string => theme.ws.medium};
  overflow: auto;
`;

/**
 * @component ModalBody
 * Used within the Modal component to provide appropriate spacing in line with
 * the ModalHeader and ModalFooter components.
 */
export default withTheme(StyledModalBody);
