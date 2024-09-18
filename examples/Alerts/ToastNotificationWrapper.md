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
              header="Upcoming Maintenance"
              forwardRef={notificationRef}
              onClick={function() {
                alert('You clicked the "Close" button.')
              }}
            >
              System maintenance will occur on 9/22/24 between 8-10PM ET. (9/9/24 3:30PM ET).
            </ToastNotification>
            <ToastNotification
              id="toast-notification-wrapper-example-toast-2"
              header="Unauthorized Login Attempt"
              variant={VARIANT.DANGER}
              onClick={function() {
                alert('You clicked the "Close" button.')
              }}
            >
              Unauthorized user John H. tried to log in (9/9/24 2:11PM ET).
            </ToastNotification>
            <ToastNotification
              id="toast-notification-wrapper-example-toast-3"
              header="System Update"
              variant={VARIANT.PRIMARY}
              onClick={function() {
                alert('You clicked the "Close" button.')
              }}
            >
              The system update has completed successfully (9/9/24 2:09PM ET).
            </ToastNotification>
          </ToastNotificationWrapper>
        </>
      :
        <Button
          id="toast-notification-wrapper-example-button-1"
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
