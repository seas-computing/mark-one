import React, {
  FunctionComponent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';
import styled from 'styled-components';
import { Button } from '../Buttons';
import { VARIANT, fromTheme } from '../Theme';

export interface ToastNotificationWrapperProps {
  /** Elements to be displayed within the wrapper */
  children: ReactNode;
  /** Function to call on click event */
  onClick: MouseEventHandler;
  /** Indicates how many notifications there are within the wrapper */
  numNotifications?: number;
}

const StyledToastNotificationWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 0.75em;
  position: fixed;
  top: 0.25em;
  right: 0.25em;
  scrollbar-gutter: stable;
  z-index: 1000;
`;

// A wrapper component to horizontally center content
const CenterContainer = styled.div`
  color: ${fromTheme('color', 'text', 'dark')};
  font-size: ${fromTheme('font', 'note', 'size')};
  justify-content: center;
  display: flex;
`;

// A helper function to determine the message related to the
// total number of notifications
const renderNotificationMessage = (numNotifications: number) => {
  if (numNotifications === 0) {
    return '';
  } if (numNotifications === 1) {
    return `${numNotifications} notification to review`;
  }
  return `${numNotifications} notifications to review`;
};

/**
 * A wrapper for the ToastNotification component to position them at the top
 * right of the page.
 */
const ToastNotificationWrapper
: FunctionComponent<ToastNotificationWrapperProps> = (props): ReactElement => {
  const {
    children,
    onClick,
    numNotifications,
  } = props;

  return (
    <StyledToastNotificationWrapper>
      <CenterContainer>
        {renderNotificationMessage(numNotifications)}
      </CenterContainer>
      {children}
      <CenterContainer>
        <Button
          id="close all button"
          variant={VARIANT.BASE}
          onClick={onClick}
        >
          Close All Notifications
        </Button>
      </CenterContainer>
    </StyledToastNotificationWrapper>
  );
};

ToastNotificationWrapper.defaultProps = {
  numNotifications: 0,
};

export default ToastNotificationWrapper;
