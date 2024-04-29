import { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';
import { fromTheme } from '../Theme';

const ModalFooter = styled.div<PropsWithChildren>`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: ${fromTheme('ws', 'small')} ${fromTheme('ws', 'medium')};
  width: 100%;
`;

declare type ModalFooter = ReactElement<PropsWithChildren>;

/**
 * @component ModalFooter
 * Used within the Modal component to render a separated bottom section,
 * typically containing buttons for save, cancel, etc.
 */
export default ModalFooter;
