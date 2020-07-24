import React,
{
  FunctionComponent,
  ChangeEventHandler,
  Ref,
  useContext,
  ReactElement,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from 'Theme';
import Label, { POSITION } from './Label';
import ValidationErrorMessage from './ValidationErrorMessage';

interface NativeCheckboxProps {
  /** The id of the label tied to the checkbox */
  id?: string;
  /** The name of the checkbox */
  name?: string;
  /** Represents the value of the checkbox */
  value?: string;
  /** If true, checkbox will be disabled */
  disabled?: boolean;
  /** Specifies whether box is checked */
  checked?: boolean;
  /** Function to call on change event */
  onChange?: ChangeEventHandler;
}

export interface CheckboxProps extends NativeCheckboxProps {
  /** Specifies the label text */
  label: string;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** If true, the checkbox is required to submit the form */
  isRequired?: boolean;
  /** The body of the error message, if applicable */
  errorMessage?: string;
  /** Specifies the ref of the text input */
  forwardRef?: Ref<HTMLInputElement>;
}

interface CustomCheckboxProps {
  /** If true, this indicates that the checkbox is checked */
  checked?: boolean;
  /** If true, checkbox will be disabled */
  disabled?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
}

interface CheckmarkBoxProps {
  /** The SVG viewBox attribute */
  viewBox: string;
  /** If true, this indicates that the checkbox is checked */
  checked?: boolean;
  /** If true, checkbox will be disabled */
  disabled?: boolean;
}

const CheckmarkBox = styled.svg<CheckmarkBoxProps>`
  fill: none;
  stroke: ${({ theme, checked, disabled }): string => {
    if (checked && disabled) {
      return `${fromTheme('color', 'text', 'medium')}`;
    } if (checked) {
      return `${fromTheme('color', 'text', 'dark')}`;
    }
    return 'none';
  }};
  stroke-width: 0.5em;
`;

const CustomCheckbox = styled.span<CustomCheckboxProps>`
  display: inline-block;
  border: ${({ theme, disabled }): string => (
    disabled
      ? `${fromTheme('border', 'light')}`
      : `2px solid ${fromTheme('color', 'text', 'base')}`
  )};
  grid-area: i;
  width: 1.25em;
  height: 1.25em;
  cursor: ${({ disabled }): string => (
    disabled
      ? 'default'
      : 'pointer'
  )};
  box-shadow: ${({ theme, checked }): string => checked && `0 0px 8px ${fromTheme('color', 'background', 'dark')}`};
  margin-right: ${fromTheme('ws', 'xsmall')};
  align-self: center;
  justify-self: ${({ labelPosition }): string => (
    labelPosition === POSITION.RIGHT
      ? 'end'
      : 'start'
  )};
`;

const NativeCheckbox = styled.input<NativeCheckboxProps>`
  opacity: 0;
  height: 0;
  width: 0;
`;

const Checkbox: FunctionComponent<CheckboxProps> = (props): ReactElement => {
  const {
    id,
    label,
    value,
    name,
    disabled,
    checked,
    onChange,
    isLabelVisible,
    labelPosition,
    isRequired,
    errorMessage,
    forwardRef,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <>
      <Label
        htmlFor={id}
        label={label}
        labelPosition={labelPosition}
        isLabelVisible={isLabelVisible}
        isRequired={isRequired}
        disabled={disabled}
      >
        <NativeCheckbox
          id={id}
          type="checkbox"
          value={value}
          name={name}
          aria-required={isRequired}
          onChange={onChange}
          disabled={disabled}
          ref={forwardRef}
          theme={theme}
          checked={checked}
        />
        <CustomCheckbox
          checked={checked}
          disabled={disabled}
          labelPosition={labelPosition}
        >
          <CheckmarkBox
            viewBox="0 0 60 60"
            checked={checked}
            disabled={disabled}
          >
            <polyline points="10 25 25 40 50 7" />
          </CheckmarkBox>
        </CustomCheckbox>
        {errorMessage
        && (
          <ValidationErrorMessage>
            {errorMessage}
          </ValidationErrorMessage>
        )}
      </Label>
    </>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  isLabelVisible: true,
  labelPosition: POSITION.RIGHT,
  checked: false,
};

/** @component */
export default Checkbox;