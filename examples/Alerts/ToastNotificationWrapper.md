```jsx
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, VARIANT, ToastNotification } from 'mark-one';

const ToastNotificationWrapperExample = () => {
  const notificationRef = useRef(null);

  const [isExampleVisible, setIsExampleVisible] = useState(false);
  return (
    <>
      {isExampleVisible ?
        <>
          <Button
            id="toast-notification-wrapper-example-button-2"
            variant={VARIANT.PRIMARY}
            onClick={() => {
              setIsExampleVisible(false);
            }}
          >
            Hide Toast Notifications
          </Button>
          <ToastNotificationWrapper>
            <ToastNotification
              id="toast-notification-wrapper-example-toast-1"
              header="Test Notification"
              forwardRef={notificationRef}
              onClick={function() {
                alert('You clicked the "Close" button.')
              }}
            >
              Unauthorized user Jane H. tried to log in (9/9/24 3:30PM ET).
            </ToastNotification>
            <ToastNotification
              id="toast-notification-wrapper-example-toast-2"
              header="Test Notification"
              onClick={function() {
                alert('You clicked the "Close" button.')
              }}
            >
              Unauthorized user John H. tried to log in (9/9/24 2:11PM ET).
            </ToastNotification>
            <ToastNotification
              id="toast-notification-wrapper-example-toast-3"
              header="Test Notification"
              onClick={function() {
                alert('You clicked the "Close" button.')
              }}
            >
              Unauthorized user John H. tried to log in (9/9/24 2:09PM ET).
            </ToastNotification>
          </ToastNotificationWrapper>
        </>
      :
        <Button
          id="toast-notification-wrapper-example-button-1"
          variant={VARIANT.PRIMARY}
          onClick={() => {
            setTimeout(() => { notificationRef.current.focus() }, 500);
            setIsExampleVisible(true);
          }}
        >
          Show Toast Notifications
        </Button>
      }
    </>
  );
};

<ToastNotificationWrapperExample />
```
