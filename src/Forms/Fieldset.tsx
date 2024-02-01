import React,
{
  FunctionComponent,
  ReactNode,
  ReactElement,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';
import { NoteText } from '../Typography';
import ValidationErrorMessage from './ValidationErrorMessage';
import { RequiredSymbol } from './InputLabel';

interface StyledFieldsetProps {
  /** Specifies the id of the associated form */
  form?: string;
  /** Specifies whether the border of fieldset is visible */
  isBorderVisible?: boolean;
  /** Specifies whether the legend of the fieldset is visible */
  isLegendVisible?: boolean;
}

export interface FieldsetProps {
  /** Describes the elements within the fieldset */
  legend: string;
  /** Specifies the id of the associated form */
  form?: string;
  /** The form elements in the fieldset */
  children: ReactNode;
  /** Text within the fieldset that describes symbol(s) (e.g. *) used to denote required fields */
  legendDescription?: string;
  /** The error message for the overall form */
  errorMessage?: string;
  /** Specifies whether the border of fieldset is visible */
  isBorderVisible?: boolean;
  /** Specifies whether the legend of the fieldset is visible */
  isLegendVisible?: boolean;
  /** If true, a choice within the fieldset is required */
  isRequired?: boolean;
}

interface StyledLegendProps {
  /** Specifies whether the legend of the fieldset is visible */
  isLegendVisible?: boolean;
  /** Specifies whether the border of fieldset is visible */
  isBorderVisible?: boolean;
}

const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
  display: block;
  border: ${({ isBorderVisible, theme }): string => (
    isBorderVisible
      ? `${theme.border.light}`
      : 'none'
  )};
  padding-inline-start: ${({ isBorderVisible, isLegendVisible }): string => (
    !isBorderVisible && !isLegendVisible
      ? null
      : '0.75em'
  )};
  padding-inline-end: 0.75em;
  min-inline-size: min-content;
  & > * {
    margin-top: ${fromTheme('ws', 'small')};
    margin-bottom: ${fromTheme('ws', 'small')};
  }
`;

const StyledLegend = styled.legend<StyledLegendProps>`
  padding: ${({ isBorderVisible }): string => (
    isBorderVisible
      ? '0.25em'
      : null
  )};
  position: ${({ isLegendVisible }): string => (
    isLegendVisible
      ? null
      : 'absolute'
  )};
  left: ${({ isLegendVisible }): string => (
    isLegendVisible
      ? null
      : '-100vw'
  )};
`;

const Fieldset: FunctionComponent<FieldsetProps> = (props): ReactElement => {
  const {
    legend,
    form,
    children,
    legendDescription,
    errorMessage,
    isBorderVisible,
    isLegendVisible,
    isRequired,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledFieldset
      form={form}
      theme={theme}
      isBorderVisible={isBorderVisible}
    >
      <StyledLegend
        isLegendVisible={isLegendVisible}
        aria-required={isRequired}
      >
        {isRequired
          ? (
            <>
              {legend}
              <RequiredSymbol>*</RequiredSymbol>
            </>
          )
          : legend}
      </StyledLegend>
      {legendDescription
        && (
          <NoteText>
            {legendDescription}
          </NoteText>
        )}
      { children }
      {errorMessage
        && (
          <ValidationErrorMessage>
            {errorMessage}
          </ValidationErrorMessage>
        )}
    </StyledFieldset>
  );
};

Fieldset.defaultProps = {
  isBorderVisible: true,
  isLegendVisible: true,
  form: '',
  legendDescription: '',
  errorMessage: '',
  isRequired: false,
};

/** @component */
export default Fieldset;
