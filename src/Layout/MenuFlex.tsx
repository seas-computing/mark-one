import { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

/**
 * @component MenuFlex
 * A flex container for a menu of items
 */
const MenuFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  align-self: center;
`;

declare type MenuFlex = ReactElement<PropsWithChildren>;

export default MenuFlex;
