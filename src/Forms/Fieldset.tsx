import React,
{
  FunctionComponent,
  ReactNode,
  ReactElement,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { NoteText } from 'Typography';
import ValidationErrorMessage from './ValidationErrorMessage';

interface StyledFieldsetProps {
  /** Specifies the id of the associated form */
  form?: string;
  /** Specifies whether the border of fieldset is visible */
  isBorderVisible?: boolean;
}

export interface FieldsetProps {
  /** Describes the elements within the fieldset */
  legend: string;
  /** Specifies the id of the associated form */
  form?: string;
  /** The form elements in the fieldset */
  children?: ReactNode;
  /** Text within the fieldset that describes symbol(s) (e.g. *) used to denote required fields */
  legendDescription?: string;
  /** The error message for the overall form */
  errorMessage?: string;
  /** Specifies whether the border of fieldset is visible */
  isBorderVisible?: boolean;
  /** Specifies whether the legend of the fieldset is visible */
  isLegendVisible?: boolean;
}

interface StyledLegendProps {
  /** Specifies whether the legend of the fieldset is visible */
  isLegendVisible?: boolean;
}

const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
  display: block;
  border: ${({ isBorderVisible, theme }): string => (
    isBorderVisible
      ? `${theme.border.light}`
      : 'none'
  )};
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
`;

const StyledLegend = styled.legend<StyledLegendProps>`
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
      >
        {legend}
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
};

/** @component */
export default Fieldset;
