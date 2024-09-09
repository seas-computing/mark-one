import React, {
  FunctionComponent,
  ReactElement,
  MouseEventHandler,
  Ref,
} from 'react';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VARIANT } from 'Theme';
import { ARIA_LIVE_VARIANT } from '../const';
import BorderlessButton from '../Buttons/BorderlessButton';
import { fromTheme } from '../Theme';

export interface ToastNotificationProps {
  /** The id of the notification */
  id: string;
  /** Text to be displayed */
  children: string;
  /** The aria role of the message displayed. A list of the different role
   * values that should be used can be found in the w3 docs:
   * https://www.w3.org/TR/wai-aria-1.1/#live_region_roles
   * The default value role is 'alert.'
   * */
  role?: string;
  /** The value of the aria-live property */
  ariaLive?: ARIA_LIVE_VARIANT;
  /** Specifies the ref of the element */
  forwardRef?: Ref<HTMLButtonElement>;
  /** Function to call on click event */
  onClick: MouseEventHandler;
}

const TextContainer = styled.div`
  grid-area: text;
`;

const ButtonContainer = styled.div`
  align-self: center;
  text-align: right;
  grid-area: button;
`;

const StyledToastNotification = styled.div`
  background: ${fromTheme('color', 'background', 'dark')};
  border: 1px solid ${fromTheme('color', 'background', 'dark')};
  display: grid;
  color: ${fromTheme('color', 'text', 'light')};
  grid-template: "text button" / 3fr 1fr;
  padding: 1em;
  width: 20em;
  z-index: 1000;
`;

const ToastNotification: FunctionComponent<ToastNotificationProps> = (props)
: ReactElement => {
  const {
    id,
    children,
    role,
    ariaLive,
    forwardRef,
    onClick,
  } = props;

  return (
    <StyledToastNotification
      id={id}
      role={role}
      aria-live={ariaLive}
    >
      <TextContainer>{children}</TextContainer>
      <ButtonContainer>
        <BorderlessButton
          id={`${id} button`}
          onClick={onClick}
          variant={VARIANT.DANGER}
          forwardRef={forwardRef}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </BorderlessButton>
      </ButtonContainer>
    </StyledToastNotification>
  );
};

ToastNotification.defaultProps = {
  role: 'alert',
  ariaLive: ARIA_LIVE_VARIANT.ASSERTIVE,
  forwardRef: null,
};

export default ToastNotification;
