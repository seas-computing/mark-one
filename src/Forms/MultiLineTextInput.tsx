import React, {
  ReactElement,
  FunctionComponent,
  ChangeEventHandler,
  useContext,
  Ref,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';
import InputLabel, { InputLabelPosition, POSITION } from './InputLabel';
import ValidationErrorMessage from './ValidationErrorMessage';

export interface MultiLineTextInputProps {
  /** The id of the label tied to this textarea */
  id: string;
  /** The body of the error message, if applicable */
  errorMessage?: string;
  /** The value of the multi-line text area */
  value?: string;
  /** Function to call on change event */
  onChange: ChangeEventHandler;
  /** Marks the field as required */
  isRequired?: boolean;
  /** The label to display beside this multi-line input field(if any) */
  label?: string;
  /** Wether to show or hide the label */
  isLabelVisible?: boolean;
  /** Disables the field entirely and prevents the onChange handler from being called */
  isDisabled?: boolean;
  /** Specify the position of the input label */
  labelPosition?: InputLabelPosition;
  /** Specifies the ref of the text input */
  forwardRef?: Ref<HTMLTextAreaElement>;
}

export const StyledTextArea = styled.textarea<MultiLineTextInputProps>`
  border: ${fromTheme('border', 'hairline')};
  width: 100%;
  padding: ${fromTheme('ws', 'xsmall')};
  padding-right: ${fromTheme('ws', 'zero')};
  grid-area: i;
`;

/**
 * A multi-line text input component that incorporates a styled label,
 * styled label text, and an error message component
 */
const MultiLineTextInput: FunctionComponent<MultiLineTextInputProps> = (props):
ReactElement => {
  const {
    id,
    value,
    onChange,
    errorMessage,
    isRequired,
    label,
    isLabelVisible,
    isDisabled,
    labelPosition,
    forwardRef,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <InputLabel
      htmlFor={id}
      label={label}
      isRequired={isRequired}
      isLabelVisible={isLabelVisible}
      labelPosition={labelPosition}
    >
      <StyledTextArea
        id={id}
        value={value}
        onChange={onChange}
        aria-invalid={errorMessage ? true : null}
        aria-errormessage={`${id}-error`}
        aria-required={isRequired}
        required={isRequired}
        theme={theme}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        ref={forwardRef}
      />
      {errorMessage && (
        <ValidationErrorMessage id={`${id}-error`}>
          {errorMessage}
        </ValidationErrorMessage>
      )}
    </InputLabel>
  );
};

MultiLineTextInput.defaultProps = {
  value: '',
  errorMessage: '',
  isRequired: false,
  label: '',
  isLabelVisible: true,
  isDisabled: false,
  labelPosition: POSITION.LEFT,
};

/** @component */
export default MultiLineTextInput;
