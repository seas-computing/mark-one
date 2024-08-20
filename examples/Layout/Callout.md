Renders a styled `<p>` element for displaying a piece of text intended to stand out to the user.

The following is an example of the default callout in which the `variant` property is assigned the default enum value `VARIANT.INFO` and the role is assigned the default value `note`.

```jsx
import { VARIANT } from 'mark-one';

<Callout>You currently have 3 shop safety certifications.</Callout>
```

The following is an example of a callout in which the `variant` property is assigned the enum value `VARIANT.POSITIVE` and the role is assigned the default value `note`.

```jsx
import { VARIANT } from 'mark-one';

<Callout variant={VARIANT.POSITIVE}>Your submission has been received! Please check your inbox for a confirmation email. We will respond within the next 48 hours.</Callout>
```

The following is an example of a callout in which the `variant` property is assigned the enum value `VARIANT.NEGATIVE` and the role is assigned the value `alert`.

```jsx
import { VARIANT } from 'mark-one';

<Callout variant={VARIANT.NEGATIVE} role='alert'>You must attend a lab safety training before taking this course.</Callout>
```