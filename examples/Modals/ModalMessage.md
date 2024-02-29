The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.NEGATIVE`.
```jsx
import { VARIANT } from 'mark-one';

<ModalMessage
  id="negativeMessage"
  variant={VARIANT.NEGATIVE}
>
  Error: Please try again.
</ModalMessage>
```

The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.PRIMARY`.
```jsx
import { VARIANT } from 'mark-one';

<ModalMessage
  id="primaryMessage"
  variant={VARIANT.PRIMARY}
>
  Success: The information has been updated.
</ModalMessage>
```

The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.INFO`.
```jsx
import { VARIANT } from 'mark-one';

<ModalMessage
  id="infoMessage"
  variant={VARIANT.INFO}
>
  Note: All fields are required to submit the form.
</ModalMessage>
```

The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.BASE`.
```jsx
import { VARIANT } from 'mark-one';

<ModalMessage
  id="baseMessage"
  variant={VARIANT.BASE}
>
  Note: All fields are required to submit the form.
</ModalMessage>
```