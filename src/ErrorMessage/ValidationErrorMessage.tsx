import React, {
  ReactNode, FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';

export interface ValidationErrorMessageProps {
  /** Text or components to be displayed */
  children: ReactNode;
}

const StyledValidationErrorMessage = styled.div`
  color: ${({ theme }): string => (theme.color.text.negative)};
`;

const ValidationErrorMessage:
FunctionComponent<ValidationErrorMessageProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledValidationErrorMessage
      theme={theme}
      role="alert"
      aria-live="assertive"
      aria-invalid="true"
    >
      {children}
    </StyledValidationErrorMessage>
  );
};

export default ValidationErrorMessage;
