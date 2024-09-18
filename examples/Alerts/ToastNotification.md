The following is an example of a Toast Notification in which the `variant` property defaults to the enum value `VARIANT.INFO`.
```jsx
import { useState } from 'react';
import { Button, VARIANT } from 'mark-one';

const [isVisible, setIsVisible] = useState(true);

<>
  {isVisible ?
    <ToastNotification
      id="test"
      header="Upcoming Maintenance"
      onClick={() => {
        setIsVisible(false);
      }}
    >
      System maintenance will occur on 9/22/24 between 8-10PM ET. (9/9/24 3:30PM ET).
    </ToastNotification>
  :
    <Button
      id="toast-notification-example-button-1"
      onClick={() => {
        setIsVisible(true);
      }}
    >
      Show Toast Notification
    </Button>
  }
</>
```

The following is an example of a Toast Notification in which the `variant` property is set to the enum value `VARIANT.DANGER`.
```jsx
import { useState } from 'react';
import { Button, VARIANT } from 'mark-one';

const [isVisible, setIsVisible] = useState(true);

<>
  {isVisible ?
    <ToastNotification
      id="test"
      header="Unauthorized Login Attempt"
      variant={VARIANT.DANGER}
      onClick={() => {
        setIsVisible(false);
      }}
    >
      Unauthorized user Jane H. tried to log in (9/9/24 3:30PM ET).
    </ToastNotification>
  :
    <Button
      id="toast-notification-example-button-1"
      onClick={() => {
        setIsVisible(true);
      }}
    >
      Show Toast Notification
    </Button>
  }
</>
```

The following is an example of a Toast Notification in which the `variant` property is set to the enum value `VARIANT.PRIMARY`.
```jsx
import { useState } from 'react';
import { Button, VARIANT } from 'mark-one';

const [isVisible, setIsVisible] = useState(true);

<>
  {isVisible ?
    <ToastNotification
      id="test"
      header="System Update"
      variant={VARIANT.PRIMARY}
      onClick={() => {
        setIsVisible(false);
      }}
    >
      The system update has completed successfully (9/9/24 3:30PM ET).
    </ToastNotification>
  :
    <Button
      id="toast-notification-example-button-1"
      onClick={() => {
        setIsVisible(true);
      }}
    >
      Show Toast Notification
    </Button>
  }
</>
```
