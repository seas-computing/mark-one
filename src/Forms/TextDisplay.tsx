import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';
import { fromTheme } from '../Theme';

// An enum that represents the possible values for the label's positioning
export enum POSITION {
  TOP = 'top',
  LEFT = 'left',
}

export interface TextDisplayProps {
  /** The id of the label tied to this text display field */
  id: string;
  /** Specifies the label text */
  label: string;
  /** The name of the text display field */
  name: string;
  /** The current value in the text display field */
  value: string;
  /** Allows you to pass in a label position property from the POSITION enum
   * @default LEFT
   */
  labelPosition?: POSITION;
  /** If true, label will be visible
   * @default true
   */
  isLabelVisible?: boolean;
}

export interface StyledDisplayLabelProps {
  /** Allows you to pass in a label position property from the POSITION enum
   * @default LEFT
   */
  labelPosition?: POSITION;
}

export interface StyledTextDisplayProps {
  /** The id of the label tied to this text display field */
  id: string;
  /** The name of the text display field */
  name: string;
  /** Allows you to pass in a label position property from the POSITION enum
   * @default LEFT
   */
  labelPosition?: POSITION;
}

export const StyledTextDisplay = styled.div<TextDisplayProps>`
  border: ${fromTheme('border', 'hairline')};
  padding: ${fromTheme('ws', 'xsmall')};
  display: inline-block;
  width: fit-content;
  ${({ labelPosition }) => labelPosition === POSITION.LEFT
    && `display: flex;
    align-items: center;
  `}
`;

export const StyledDisplayLabel = styled.div<StyledDisplayLabelProps>`
  font-weight: bold;
  margin-bottom: ${({ labelPosition }) => (labelPosition === POSITION.TOP ? '0.5em' : '0')};
  margin-right: ${({ labelPosition }) => (labelPosition === POSITION.LEFT ? '0.5em' : '0')};
  padding: ${fromTheme('ws', 'xsmall')};
`;

export const StyledContainer = styled.div<StyledDisplayLabelProps>`
  display: flex;
  flex-direction: ${({ labelPosition }) => (labelPosition === POSITION.LEFT ? 'row' : 'column')};
  align-items: ${({ labelPosition }) => (labelPosition === POSITION.LEFT ? 'center' : 'flex-start')};
`;

/** A text display component that incorporates a styled label and styled label text */

const TextDisplay: FunctionComponent<TextDisplayProps> = (
  props
): ReactElement => {
  const {
    id, label, name, value, isLabelVisible = true,
    labelPosition = POSITION.LEFT,
  } = props;
  return (
    <StyledContainer labelPosition={labelPosition}>
      {isLabelVisible && (
        <StyledDisplayLabel labelPosition={labelPosition}>
          {label}
        </StyledDisplayLabel>
      )}
      <StyledTextDisplay
        id={id}
        name={name}
        label={label}
        value={value}
        labelPosition={labelPosition}
      >
        {value}
      </StyledTextDisplay>
    </StyledContainer>
  );
};

TextDisplay.defaultProps = {
  isLabelVisible: true,
  labelPosition: POSITION.LEFT,
};

/** @component */
export default TextDisplay;
