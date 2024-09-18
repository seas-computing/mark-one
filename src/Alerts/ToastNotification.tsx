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
  /**
   * Displays the overall purpose of the notification
   */
  header?: string;
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
  forwardRef?: Ref<HTMLDivElement>;
  /** Function to call on click event */
  onClick: MouseEventHandler;
}

const Header = styled.h2`
  color: ${fromTheme('color', 'text', 'light')};
  font-size: ${fromTheme('font', 'bold', 'size')};
`;

const TextContainer = styled.div`
  color: ${fromTheme('color', 'text', 'light')};
  font-size: ${fromTheme('font', 'note', 'size')};
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
  grid-template: "text button" / 3fr 1fr;
  margin-bottom: 0.25em;
  padding: 0.75em;
  width: 20em;
  z-index: 1000;
`;

const ToastNotification: FunctionComponent<ToastNotificationProps> = (props)
: ReactElement => {
  const {
    id,
    header,
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
      tabIndex={-1}
      ref={forwardRef}
    >
      <TextContainer>
        {header && (
          <Header>
            {header}
          </Header>
        )}
        {children}
      </TextContainer>
      <ButtonContainer>
        <BorderlessButton
          id={`${id} button`}
          alt={`${id} close button`}
          onClick={onClick}
          variant={VARIANT.DANGER}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </BorderlessButton>
      </ButtonContainer>
    </StyledToastNotification>
  );
};

ToastNotification.defaultProps = {
  header: '',
  role: 'alert',
  ariaLive: ARIA_LIVE_VARIANT.ASSERTIVE,
  forwardRef: null,
};

export default ToastNotification;
