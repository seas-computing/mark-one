import React, {
  FunctionComponent,
  useContext,
  ReactElement,
  MouseEventHandler,
  Ref,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VARIANT } from 'Theme';
import { ARIA_LIVE_VARIANT } from '../const';
import BorderlessButton from '../Buttons/BorderlessButton';

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
  text-align: right;
  grid-area: button;
`;

const StyledToastNotification = styled.div`
  z-index: 1000;
  display: grid;
  grid-template: ". text button" / 1fr 2fr 1fr;
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
