import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  ReactNode,
  MouseEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { MarkOneProps } from 'Theme/MarkOneWrapper';
import { VARIANT, fromTheme } from '../Theme';

export interface ButtonProps extends MarkOneProps<HTMLButtonElement> {
  /** The id of the button */
  id?: string;
  /** Text or components to be displayed on the button */
  children?: ReactNode;
  /** Function to call on click event */
  onClick: MouseEventHandler;
  /** If true, button won't fire */
  disabled?: boolean;
  /** Allows you to pass in a variant property from the VARIANT enum */
  variant: VARIANT;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${({ theme, variant }) => theme.color.background[variant].medium};
  border: none;
  color: ${({ theme, variant }) => (
    theme.color.text[variant === VARIANT.BASE ? 'dark' : 'light']
  )};
  cursor: pointer;
  font-size: ${fromTheme('font', 'body', 'size')};
  font-weight: ${fromTheme('font', 'body', 'weight')};
  padding: ${({ theme }) => (`${theme.ws.xsmall} ${theme.ws.small}`)};
  &:hover {
    background: ${({ theme, variant }) => theme.color.background[variant].dark};
    border: none;
    color: ${({ theme, variant }) => (
    theme.color.text[variant === VARIANT.BASE ? 'dark' : 'light']
  )};
  }
`;

StyledButton.defaultProps = {
  variant: VARIANT.BASE,
};

const Button: FunctionComponent<ButtonProps> = (props): ReactElement => {
  const {
    id,
    children,
    onClick,
    disabled,
    variant,
    forwardRef,
    alt,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledButton
      id={id}
      onClick={onClick}
      theme={theme}
      disabled={disabled}
      variant={variant}
      ref={forwardRef}
      aria-label={alt}
    >
      { children }
    </StyledButton>
  );
};

Button.defaultProps = {
  children: '',
};

export default Button;
