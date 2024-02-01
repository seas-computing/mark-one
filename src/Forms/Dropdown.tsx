import React, {
  ReactElement,
  FunctionComponent,
  useContext,
  ChangeEventHandler,
  Ref,
  MouseEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';
import ValidationErrorMessage from './ValidationErrorMessage';
import InputLabel, { InputLabelPosition, POSITION } from './InputLabel';

export interface DropdownOptionProps {
  /** The label of the dropdown option */
  label: string;
  /** The value of the dropdown option */
  value: string;
  /** Specifies whether the dropdown option is disabled */
  disabled?: boolean;
}

export interface DropdownProps {
  /** The id tied to this dropdown field */
  id: string;
  /** Function to call on change event */
  onChange: ChangeEventHandler;
  /** Function to call on click event */
  onClick?: MouseEventHandler
  /** The name of the dropdown */
  name: string;
  /** An array of objects with the properties specified through DropdownOptions */
  options: Array<DropdownOptionProps>;
  /** The currently selected dropdown value */
  value?: string;
  /** The dropdown value selected by default */
  defaultValue?: string;
  /** If true, the dropdown is required to submit the form */
  isRequired?: boolean;
  /** The body of the error message, if applicable */
  errorMessage?: string;
  /** Specifies the label text */
  label: string;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: InputLabelPosition;
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Specifies the ref of the dropdown */
  forwardRef?: Ref<HTMLSelectElement>;
  /** If true, hide the error msg and its style */
  hideError?: boolean;
  /** Specifies whether the dropdown is disabled */
  disabled?: boolean;
}

const StyledDropdown = styled.select`
  color: ${fromTheme('color', 'text', 'dark')};
  width: 100%;
  grid-area: i;
`;

const Dropdown: FunctionComponent<DropdownProps> = (props): ReactElement => {
  const {
    id,
    onChange,
    onClick,
    name,
    options,
    value,
    defaultValue,
    isRequired,
    errorMessage,
    label,
    labelPosition,
    isLabelVisible,
    forwardRef,
    hideError,
    disabled,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <InputLabel
      htmlFor={id}
      label={label}
      labelPosition={labelPosition}
      isLabelVisible={isLabelVisible}
      isRequired={isRequired}
      hideError={hideError}
    >
      <StyledDropdown
        id={id}
        onChange={onChange}
        onClick={onClick}
        theme={theme}
        name={name}
        value={value}
        defaultValue={defaultValue}
        aria-errormessage={`${id}-error`}
        aria-invalid={errorMessage ? true : null}
        aria-required={isRequired}
        required={isRequired}
        ref={forwardRef}
        disabled={disabled}
      >
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </StyledDropdown>
      {errorMessage && !hideError
      && (
        <ValidationErrorMessage id={`${id}-error`}>
          {errorMessage}
        </ValidationErrorMessage>
      )}
    </InputLabel>
  );
};

Dropdown.defaultProps = {
  labelPosition: POSITION.TOP,
  isLabelVisible: true,
  hideError: false,
  isRequired: false,
  errorMessage: '',
  forwardRef: null,
  disabled: false,
  value: '',
  defaultValue: '',
};

/** @component */
export default Dropdown;
