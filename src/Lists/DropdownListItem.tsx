import styled from 'styled-components';

/**
* Defines a child component of the DropdownList. The styling is minimal, though
* it can be wrapped and expanded for other implementations.
*/
const DropdownListItem = styled.li`
  width: 100%;
`;

export type DropdownListItem = HTMLLIElement;
export default DropdownListItem;
