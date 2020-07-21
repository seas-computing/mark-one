import React, {
  ReactElement,
  useContext,
  ChangeEventHandler,
  FunctionComponent,
  Ref,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import ValidationErrorMessage from './ValidationErrorMessage';
import Label, { POSITION } from './Label';

export interface TextInputProps {
  /** The id of the label tied to this text input field */
  id: string;
  /** Specifies the label text */
  label: string;
  /** Function to call on change event */
  onChange: ChangeEventHandler;
  /** The name of the text input field */
  name: string;
  /** The placeholder value of the input field */
  placeholder?: string;
  /** Specifies the type of input */
  type?: string;
  /** The current value in the text input field */
  value: string;
  /** Specifies the size of the font for the text in the input field */
  fontSize?: string;
  /** The body of the error message, if applicable */
  errorMessage?: string;
  /** If true, text input field will be disabled */
  disabled?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** If true, the input for the text field is required to submit the form */
  isRequired?: boolean;
  /** Specifies the ref of the text input */
  forwardRef?: Ref<HTMLInputElement>;
}

const StyledTextInput = styled.input<TextInputProps>`
  border: ${({ theme }): string => (theme.border.hairline)};
  width: 100%;
  padding: ${({ theme }): string => (theme.ws.xsmall + ' ' + theme.ws.zero + ' ' + theme.ws.xsmall + ' ' + theme.ws.xsmall)};
  grid-area: i;
`;

/**
 * A text input component that incorporates a styled label, styled label text,
 * and an error message component
 */
const TextInput: FunctionComponent<TextInputProps> = (props): ReactElement => {
  const {
    id,
    onChange,
    type,
    name,
    placeholder,
    value,
    errorMessage,
    disabled,
    label,
    labelPosition,
    isLabelVisible,
    isRequired,
    forwardRef,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <Label
      htmlFor={id}
      label={label}
      labelPosition={labelPosition}
      isLabelVisible={isLabelVisible}
      isRequired={isRequired}
    >
      <StyledTextInput
        onChange={onChange}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        theme={theme}
        value={value}
        disabled={disabled}
        label={label}
        aria-errormessage={`${id}-error`}
        aria-invalid={errorMessage ? true : null}
        aria-required={isRequired}
        ref={forwardRef}
      />
      {errorMessage
      && (
        <ValidationErrorMessage id={`${id}-error`}>
          {errorMessage}
        </ValidationErrorMessage>
      )}
    </Label>
  );
};

TextInput.defaultProps = {
  type: 'text',
  disabled: false,
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
};

/** @component */
export default TextInput;
