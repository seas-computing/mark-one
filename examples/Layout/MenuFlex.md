A flex container to display a menu of items:

```jsx
import { useState } from 'react';
import { Checkbox, TextInput, POSITION } from 'mark-one';

const [checkboxValue, setCheckboxValue] = useState(false);
const [textValue, setTextValue] = useState('');

<MenuFlex>
  <Checkbox
    id="menuflex-example-checkbox-1"
    checked={checkboxValue}
    label="Are you transferring from another department?"
    onChange={(event) => {
      setCheckboxValue(!checkboxValue);
    }}
  />
  <TextInput
    id="menuflex-example-textinput-1"
    value={textValue}
    name="department"
    label="Previous Department (if applicable)"
    onChange={(event) => {
      setTextValue(event.target.value);
    }}
    labelPosition={POSITION.TOP}
  />
</MenuFlex>
```
