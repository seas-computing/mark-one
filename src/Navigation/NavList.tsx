import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';
import { NavItem } from './NavItem';

export interface NavListProps {
  /** Our NavItem functional component serves as the children for NavList  */
  children: Array<NavItem>;
}

const StyledNavList = styled.ul`
  background-color: ${({ theme }): string => (theme.color.background.subtle)};
  border-collapse: collapse;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

const NavList: FunctionComponent<NavListProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledNavList theme={theme}>
      { children }
    </StyledNavList>
  );
};

declare type NavList = ReactElement<NavListProps>;

export default NavList;
