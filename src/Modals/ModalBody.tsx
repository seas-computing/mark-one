import { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';
import { fromTheme } from '../Theme';

const ModalBody = styled.div`
  padding: ${fromTheme('ws', 'medium')};
  overflow: auto;
`;

declare type ModalBody = ReactElement<PropsWithChildren>;

/**
 * @component ModalBody
 * Used within the Modal component to provide appropriate spacing in line with
 * the ModalHeader and ModalFooter components.
 */
export default ModalBody;
