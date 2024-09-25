import React, {
  FunctionComponent,
  ReactElement,
  MouseEventHandler,
  Ref,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { ARIA_LIVE_VARIANT } from '../const';
import { fromTheme, VARIANT } from '../Theme';
import { Button } from '../Buttons';

export interface ToastNotificationProps {
  /** The id of the notification */
  id: string;
  /**
   * Displays the overall purpose of the notification
   */
  header?: string;
  /** Text to be displayed */
  children: string;
  /** Allows you to pass in a variant property from the VARIANT enum */
  variant?: VARIANT;
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

interface StyledToastNotificationProps {
  /** Allows you to pass in a variant property from the VARIANT enum */
  variant: VARIANT;
}

const Header = styled.h2`
  color: ${fromTheme('color', 'text', 'dark')};
  font-size: ${fromTheme('font', 'bold', 'size')};
`;

const TextContainer = styled.div`
  color: ${fromTheme('color', 'text', 'dark')};
  font-size: ${fromTheme('font', 'note', 'size')};
  grid-area: text;
`;

const ButtonContainer = styled.div`
  align-self: center;
  text-align: right;
  grid-area: button;
`;

const StyledToastNotification = styled.div<StyledToastNotificationProps>`
  background: ${fromTheme('color', 'background', 'light')};
  border: 3px solid ${({ theme, variant }) => theme.color.background[variant].dark};
  display: grid;
  grid-template: "text button" / 3fr 1fr;
  margin-bottom: 0.25em;
  padding: 1em;
  width: 20em;
  z-index: 1000;
`;

const ToastNotification: FunctionComponent<ToastNotificationProps> = (props)
: ReactElement => {
  const {
    id,
    header,
    children,
    variant,
    role,
    ariaLive,
    forwardRef,
    onClick,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <StyledToastNotification
      id={id}
      variant={variant}
      theme={theme}
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
        <Button
          id={`${id} button`}
          alt={`${id} close button`}
          onClick={onClick}
          variant={VARIANT.BASE}
        >
          Close
        </Button>
      </ButtonContainer>
    </StyledToastNotification>
  );
};

ToastNotification.defaultProps = {
  header: '',
  variant: VARIANT.INFO,
  role: 'alert',
  ariaLive: ARIA_LIVE_VARIANT.ASSERTIVE,
  forwardRef: null,
};

export default ToastNotification;
