import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }): string => (theme.color.background.medium)};
  border: ${({ theme }): string => (theme.border.light)};
  color: ${({ theme }): string => (theme.color.text.dark)};
  cursor: pointer;
  font-size: ${({ theme }): string => (theme.font.body.size)};
  font-weight: ${({ theme }): string => (theme.font.body.weight)};
  padding: ${({ theme }): string => (theme.ws.xsmall + ' ' + theme.ws.small)};
  &:hover {
    background: ${({ theme }): string => (theme.color.background.dark)};
  }
`;