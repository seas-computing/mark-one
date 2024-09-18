```jsx
import { useState } from 'react';
import { Button, VARIANT } from 'mark-one';

const ToastNotificationExample = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible ?
        <ToastNotification
          id="test"
          header="Test Notification"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Unauthorized user Jane H. tried to log in (9/9/24 3:30PM ET).
        </ToastNotification>
      :
        <Button
          id="toast-notification-example-button-1"
          variant={VARIANT.PRIMARY}
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show Toast Notification
        </Button>
      }
    </>
  );
};

<ToastNotificationExample />
```
