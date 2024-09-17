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
  position: absolute;
  top: 5px;
  right: 5px;
`;

export default ToastNotificationWrapper;
