import React, { FunctionComponent, ReactNode, AriaRole } from 'react';
import styled from 'styled-components';
import { VARIANT } from '../Theme';

export interface CalloutProps {
  /**
 * Allows the user to set the background color by passing in a variant property from the VARIANT enum
 * @default VARIANT.INFO
 */
  variant?: VARIANT;
  /**
   * The aria role of the displayed callout. A list of the different role
   * values that should be used can be found in the w3 docs:
   * https://www.w3.org/TR/wai-aria-1.1/#live_region_roles
   * The default value role is 'note'.
   */
  role?: AriaRole;
  children: ReactNode;
}

interface StyledCalloutProps {
  variant: VARIANT;
}

const StyledCallout = styled.p<StyledCalloutProps>`
  font-family: ${({ theme }): string => theme.font.callout.family};
  font-size: ${({ theme }): string => theme.font.callout.size};
  font-weight: ${({ theme }): string => theme.font.callout.weight};
  color: ${({ theme }): string => theme.color.text.dark};
  background: ${({ theme, variant }): string => theme.color.background[variant].light};
  margin-left: ${({ theme }):string => theme.ws.large};
  margin-top: ${({ theme }):string => theme.ws.medium};
  margin-bottom: ${({ theme }):string => theme.ws.small};
  padding: ${({ theme }):string => theme.ws.large};
`;

const Callout: FunctionComponent<CalloutProps> = ({
  variant = VARIANT.INFO,
  role = 'info',
  children,
}) => (
  <StyledCallout variant={variant} role={role}>
    {children}
  </StyledCallout>
);

Callout.defaultProps = {
  variant: VARIANT.INFO,
  role: 'note',
};

/**
 * @component Callout
 * Render a callout to display a piece of text intended to stand out to the user.
 */

export default Callout;
