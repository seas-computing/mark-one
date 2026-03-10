A specialized component for displaying icons as links.

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

<IconLink
  title="Edit account information"
  alt="Edit account information"
>
  <FontAwesomeIcon icon={faUser} size="small" />
</IconLink>
```
