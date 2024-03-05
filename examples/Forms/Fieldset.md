Fieldset Legend and Error message example: The `legend` property is set to "Fieldset Legend," the `isRequired` property is set to `true,` and the `errorMessage` property is set. Two of the fieldset children, required checkboxes, also have their individual error messages.
```jsx
import { useState } from 'react';
import { Checkbox } from 'mark-one';

const [requiredCheckbox, setRequiredCheckbox] = useState(false);
const [anotherRequiredCheckbox, setAnotherRequiredCheckbox] = useState(false);
const [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);

<Fieldset
  legend="Fieldset Legend"
  legendDescription="Note: * denoted required information"
  errorMessage="Error: Please fill in the required fields in the form."
  isRequired
>
  <Checkbox
    id="fieldset-example-checkbox-1"
    checked={requiredCheckbox}
    label="Required Checkbox"
    onChange={(event) => {
      setRequiredCheckbox(!requiredCheckbox);
    }}
    errorMessage="Please select this checkbox before proceeding."
    isRequired
  />
  <Checkbox
    id="fieldset-example-checkbox-2"
    checked={anotherRequiredCheckbox}
    label="Another Required Checkbox"
    onChange={(event) => {
      setAnotherRequiredCheckbox(!anotherRequiredCheckbox);
    }}
    errorMessage="Please select this checkbox before proceeding."
    isRequired
  />
  <Checkbox
    id="fieldset-example-checkbox-3"
    checked={nonRequiredCheckbox}
    label="Non-Required Checkbox"
    onChange={(event) => {
      setNonRequiredCheckbox(!nonRequiredCheckbox);
  }}
  />
</Fieldset>
```

Non Visible Border example: The `isBorderVisible` property is set to `false,` and the `isRequired` property is set to `true.`
```jsx
import { useState } from 'react';
import { Checkbox } from 'mark-one';

const [requiredCheckbox, setRequiredCheckbox] = useState(false);
const [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);

<Fieldset
  legend="Fieldset Legend"
  legendDescription="Note: * denoted required information"
  isBorderVisible={false}
  isRequired
>
  <Checkbox
    id="fieldset-example-checkbox-4"
    checked={requiredCheckbox}
    label="Required Checkbox"
    onChange={(event) => {
      setRequiredCheckbox(!requiredCheckbox);
    }}
    isRequired
  />
  <Checkbox
    id="fieldset-example-checkbox-5"
    checked={nonRequiredCheckbox}
    label="Non-Required Checkbox"
    onChange={(event) => {
      setNonRequiredCheckbox(!nonRequiredCheckbox);
    }}
  />
</Fieldset>
```

Non Visible Border and Non Visible Legend example: The `isBorderVisible` property is set to `false,` the `legend` property is set to "Fieldset Legend," the `isLegendVisible` property is set to `false,` and the `isRequired` property is set to `true.`
```jsx
import { useState } from 'react';
import { Checkbox } from 'mark-one';

const [requiredCheckbox, setRequiredCheckbox] = useState(false);
const [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);

<Fieldset
  legend="Fieldset Legend"
  legendDescription="Note: * denoted required information"
  isBorderVisible={false}
  isLegendVisible={false}
  isRequired
>
  <Checkbox
    id="fieldset-example-checkbox-6"
    checked={requiredCheckbox}
    label="Required Checkbox"
    onChange={(event) => {
      setRequiredCheckbox(!requiredCheckbox);
    }}
    isRequired
  />
  <Checkbox
    id="fieldset-example-checkbox-7"
    checked={nonRequiredCheckbox}
    label="Non-Required Checkbox"
    onChange={(event) => {
      setNonRequiredCheckbox(!nonRequiredCheckbox);
    }}
  />
</Fieldset>
```

Visible Border and Non Visible Legend example: The `legend` property is set to "Fieldset Legend," and the `isLegendVisible` property is set to `false,` and the `isRequired` property is set to `true.`
```jsx
import { useState } from 'react';
import { Checkbox } from 'mark-one';

const [requiredCheckbox, setRequiredCheckbox] = useState(false);
const [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);

<Fieldset
  legend="Fieldset Legend"
  legendDescription="Note: * denoted required information"
  isLegendVisible={false}
  isRequired
>
  <Checkbox
    id="fieldset-example-checkbox-8"
    checked={requiredCheckbox}
    label="Required Checkbox"
    onChange={(event) => {
      setRequiredCheckbox(!requiredCheckbox);
    }}
    isRequired
  />
  <Checkbox
    id="fieldset-example-checkbox-9"
    checked={nonRequiredCheckbox}
    label="Non-Required Checkbox"
    onChange={(event) => {
      setNonRequiredCheckbox(!nonRequiredCheckbox);
    }}
  />
</Fieldset>
```
