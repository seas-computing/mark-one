import React, {
  FunctionComponent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';
import styled from 'styled-components';
import { Button } from '../Buttons';
import { VARIANT } from '../Theme';

export interface ToastNotificationWrapperProps {
  /** Elements to be displayed within the wrapper */
  children: ReactNode;
  /** Function to call on click event */
  onClick: MouseEventHandler;
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
  justify-content: center;
  display: flex;
`;

/**
 * A wrapper for the ToastNotification component to position them at the top
 * right of the page.
 */
const ToastNotificationWrapper
: FunctionComponent<ToastNotificationWrapperProps> = (props): ReactElement => {
  const {
    children,
    onClick,
  } = props;

  return (
    <StyledToastNotificationWrapper>
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

export default ToastNotificationWrapper;
