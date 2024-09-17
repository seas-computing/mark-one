import styled from 'styled-components';

/**
 * A wrapper for the ToastNotification component to position them at the top
 * right of the page.
 */
const ToastNotificationWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 1000;
`;

export default ToastNotificationWrapper;
