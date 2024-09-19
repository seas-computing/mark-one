```jsx
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, VARIANT, ToastNotification } from 'mark-one';

const notificationRef = useRef(null);

const [isExampleVisible, setIsExampleVisible] = useState(false);
const [isInfoToastVisible, setIsInfoToastVisible] = useState(false);
const [isDangerToastVisible, setIsDangerToastVisible] = useState(false);
const [isPrimaryToastVisible, setIsPrimaryToastVisible] = useState(false);
const [userStartedInteracting, setUserStartedInteracting] = useState(false);

<>
  {!isExampleVisible || (!isInfoToastVisible && !isDangerToastVisible && !isPrimaryToastVisible && userStartedInteracting) ?
    <Button
      id="toast-notification-wrapper-example-button-1"
      onClick={() => {
        setTimeout(() => { notificationRef.current.focus() }, 500);
        setIsExampleVisible(true);
        setIsInfoToastVisible(true);
        setIsDangerToastVisible(true);
        setIsPrimaryToastVisible(true);
        setUserStartedInteracting(true);
      }}
    >
      Show Toast Notifications
    </Button>
    :
    <>
      <Button
        id="toast-notification-wrapper-example-button-2"
        variant={VARIANT.PRIMARY}
        onClick={() => {
          setIsExampleVisible(false);
          setIsInfoToastVisible(false);
          setIsDangerToastVisible(false);
          setIsPrimaryToastVisible(false);
        }}
      >
        Hide Toast Notifications
      </Button>
      <ToastNotificationWrapper>
        {isInfoToastVisible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-1"
            header="Upcoming Maintenance"
            forwardRef={notificationRef}
            onClick={function() {
              setIsInfoToastVisible(false);
            }}
          >
            System maintenance will occur on 9/22/24 between 8-10PM ET. (9/9/24 3:30PM ET).
          </ToastNotification>
        }
        {isDangerToastVisible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-2"
            header="Unauthorized Login Attempt"
            variant={VARIANT.DANGER}
            onClick={function() {
              setIsDangerToastVisible(false);
            }}
          >
            Unauthorized user John H. tried to log in (9/9/24 2:11PM ET).
          </ToastNotification>
        }
        {isPrimaryToastVisible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-3"
            header="System Update"
            variant={VARIANT.PRIMARY}
            onClick={function() {
              setIsPrimaryToastVisible(false);
            }}
          >
            The system update has completed successfully (9/9/24 2:09PM ET).
          </ToastNotification>
        }
      </ToastNotificationWrapper>
    </>
  }
</>
```
