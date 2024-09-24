```jsx
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button, VARIANT, ToastNotification } from 'mark-one';

const notificationRef = useRef(null);

const [isExampleVisible, setIsExampleVisible] = useState(false);
const [isInfoToastVisible, setIsInfoToastVisible] = useState(false);
const [isDangerToast1Visible, setIsDangerToast1Visible] = useState(false);
const [isDangerToast2Visible, setIsDangerToast2Visible] = useState(false);
const [isDangerToast3Visible, setIsDangerToast3Visible] = useState(false);
const [isDangerToast4Visible, setIsDangerToast4Visible] = useState(false);
const [isDangerToast5Visible, setIsDangerToast5Visible] = useState(false);
const [isDangerToast6Visible, setIsDangerToast6Visible] = useState(false);
const [isDangerToast7Visible, setIsDangerToast7Visible] = useState(false);
const [isDangerToast8Visible, setIsDangerToast8Visible] = useState(false);
const [isPrimaryToastVisible, setIsPrimaryToastVisible] = useState(false);
const [visibleToastCount, setVisibleToastCount] = useState(0);
const [userStartedInteracting, setUserStartedInteracting] = useState(false);

useEffect(() => {
    const count = [
      isInfoToastVisible,
      isDangerToast1Visible,
      isDangerToast2Visible,
      isDangerToast3Visible,
      isDangerToast4Visible,
      isDangerToast5Visible,
      isDangerToast6Visible,
      isDangerToast7Visible,
      isDangerToast8Visible,
      isPrimaryToastVisible,
    ].filter(Boolean).length;
    setVisibleToastCount(count);
  }, [
    isInfoToastVisible,
    isDangerToast1Visible,
    isDangerToast2Visible,
    isDangerToast3Visible,
    isDangerToast4Visible,
    isDangerToast5Visible,
    isDangerToast6Visible,
    isDangerToast7Visible,
    isDangerToast8Visible,
    isPrimaryToastVisible,
  ]);

const closeAllNotifications = () => {
  setIsInfoToastVisible(false);
  setIsDangerToast1Visible(false);
  setIsPrimaryToastVisible(false);
  setIsDangerToast2Visible(false);
  setIsDangerToast3Visible(false);
  setIsDangerToast4Visible(false);
  setIsDangerToast5Visible(false);
  setIsDangerToast6Visible(false);
  setIsDangerToast7Visible(false);
  setIsDangerToast8Visible(false);
};

<>
  {!isExampleVisible || (!isInfoToastVisible && !isPrimaryToastVisible && !isDangerToast1Visible && !isDangerToast2Visible && !isDangerToast3Visible && !isDangerToast4Visible && !isDangerToast5Visible && !isDangerToast6Visible && !isDangerToast7Visible && !isDangerToast8Visible && userStartedInteracting) ?
    <Button
      id="toast-notification-wrapper-example-button-1"
      onClick={() => {
        setTimeout(() => { notificationRef.current.focus() }, 500);
        setIsExampleVisible(true);
        setIsInfoToastVisible(true);
        setIsDangerToast1Visible(true);
        setIsPrimaryToastVisible(true);
        setIsDangerToast2Visible(true);
        setIsDangerToast3Visible(true);
        setIsDangerToast4Visible(true);
        setIsDangerToast5Visible(true);
        setIsDangerToast6Visible(true);
        setIsDangerToast7Visible(true);
        setIsDangerToast8Visible(true);
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
          closeAllNotifications();
        }}
      >
        Hide Toast Notifications
      </Button>
      <ToastNotificationWrapper
        numNotifications={visibleToastCount}
        onClick={() => {
          setIsExampleVisible(false);
          closeAllNotifications();
        }}
      >
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
        {isDangerToast1Visible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-2"
            header="Unauthorized Login Attempt"
            variant={VARIANT.DANGER}
            onClick={function() {
              setIsDangerToast1Visible(false);
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
        {isDangerToast2Visible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-4"
            header="Unauthorized Login Attempt"
            variant={VARIANT.DANGER}
            onClick={function() {
              setIsDangerToast2Visible(false);
            }}
          >
            Unauthorized user Jane H. tried to log in (9/9/24 2:08PM ET).
          </ToastNotification>
        }
        {isDangerToast3Visible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-5"
            header="Unauthorized Login Attempt"
            variant={VARIANT.DANGER}
            onClick={function() {
              setIsDangerToast3Visible(false);
            }}
          >
            Unauthorized user John H. tried to log in (9/9/24 2:03PM ET).
          </ToastNotification>
        }
        {isDangerToast4Visible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-6"
            header="Unauthorized Login Attempt"
            variant={VARIANT.DANGER}
            onClick={function() {
              setIsDangerToast4Visible(false);
            }}
          >
            Unauthorized user John H. tried to log in (9/9/24 1:55PM ET).
          </ToastNotification>
        }
        {isDangerToast5Visible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-7"
            header="Unauthorized Login Attempt"
            variant={VARIANT.DANGER}
            onClick={function() {
              setIsDangerToast5Visible(false);
            }}
          >
            Unauthorized user Jane H. tried to log in (9/9/24 1:48PM ET).
          </ToastNotification>
        }
        {isDangerToast6Visible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-8"
            header="Unauthorized Login Attempt"
            variant={VARIANT.DANGER}
            onClick={function() {
              setIsDangerToast6Visible(false);
            }}
          >
            Unauthorized user Jane H. tried to log in (9/9/24 1:40PM ET).
          </ToastNotification>
        }
        {isDangerToast7Visible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-9"
            header="Unauthorized Login Attempt"
            variant={VARIANT.DANGER}
            onClick={function() {
              setIsDangerToast7Visible(false);
            }}
          >
            Unauthorized user John H. tried to log in (9/9/24 1:37PM ET).
          </ToastNotification>
        }
        {isDangerToast8Visible &&
          <ToastNotification
            id="toast-notification-wrapper-example-toast-10"
            header="Unauthorized Login Attempt"
            variant={VARIANT.DANGER}
            onClick={function() {
              setIsDangerToast8Visible(false);
            }}
          >
            Unauthorized user Jane H. tried to log in (9/9/24 1:15PM ET).
          </ToastNotification>
        }
      </ToastNotificationWrapper>
    </>
  }
</>
```
