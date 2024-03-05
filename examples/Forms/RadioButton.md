Non Visible Fieldset example: A radio button group should be wrapped with the `Fieldset` component for accessibility purposes. The following example includes a `Fieldset` in which is `isBorderVisible` and `isLegendVisible` props are set to `false.`
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';

const [checkedValue, setCheckedValue] = useState('');

<>
  <Fieldset
    legend="Fieldset Legend"
    isBorderVisible={false}
    isLegendVisible={false}
  >
    <RadioButton
      id="radioButton-example-radioButton-1"
      label="Foo"
      value="foo"
      name="nonVisibleFieldsetTest"
      checked={checkedValue === 'foo'}
      onChange={(event) => setCheckedValue(event.target.value)}
    />
    <RadioButton
      id="radioButton-example-radioButton-2"
      label="Bar"
      value="bar"
      name="nonVisibleFieldsetTest"
      checked={checkedValue === 'bar'}
      onChange={(event) => setCheckedValue(event.target.value)}
    />
    <RadioButton
      id="radioButton-example-radioButton-3"
      label="Baz"
      value="baz"
      name="nonVisibleFieldsetTest"
      checked={checkedValue === 'baz'}
      onChange={(event) => setCheckedValue(event.target.value)}
    />
  </Fieldset>
</>
```

Visible Fieldset example: A radio button group should be wrapped with the `Fieldset` component for accessibility purposes. The following example includes a `Fieldset` in which is `isBorderVisible` and `isLegendVisible` props are set to `true.`
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';

const [checkedValue, setCheckedValue] = useState('');

<>
  <Fieldset
    legend="Appointment Time Preference"
    isBorderVisible
    isLegendVisible
  >
    <RadioButton
      id="radioButton-example-radioButton-4"
      label="Morning"
      value="morning"
      name="visibleFieldsetTest"
      checked={checkedValue === 'morning'}
      onChange={(event) => setCheckedValue(event.target.value)}
    />
    <RadioButton
      id="radioButton-example-radioButton-5"
      label="Noon"
      value="noon"
      name="visibleFieldsetTest"
      checked={checkedValue === 'noon'}
      onChange={(event) => setCheckedValue(event.target.value)}
    />
    <RadioButton
      id="radioButton-example-radioButton-6"
      label="Evening"
      value="evening"
      name="visibleFieldsetTest"
      checked={checkedValue === 'evening'}
      onChange={(event) => setCheckedValue(event.target.value)}
    />
  </Fieldset>
</>
```

Disabled example: The `disabled` property is `true` for the last radio button.
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';

const [checkedValue, setCheckedValue] = useState('');

<>
  <Fieldset
    legend="Fieldset Legend"
    isBorderVisible={false}
    isLegendVisible={false}
  >
    <RadioButton
      id="radioButton-example-radioButton-7"
      label="One"
      value="one"
      name="quantity"
      checked={checkedValue === 'one'}
      onChange={(event) => setCheckedValue(event.target.value)}
    />
    <RadioButton
      id="radioButton-example-radioButton-8"
      label="Two"
      value="two"
      name="quantity"
      checked={checkedValue === 'two'}
      onChange={(event) => setCheckedValue(event.target.value)}
    />
    <RadioButton
      id="radioButton-example-radioButton-9"
      label="Three"
      value="three"
      name="quantity"
      checked={checkedValue === 'three'}
      disabled
      onChange={(event) => setCheckedValue(event.target.value)}
    />
  </Fieldset>
</>
```

Required example: The `isRequired` prop is present.
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';

const [checkedValue, setCheckedValue] = useState('');

<>
  <Fieldset
    legend="Terms and Conditions"
    isBorderVisible={false}
    isLegendVisible={false}
    legendDescription="Note: * denoted required information"
  >
    <RadioButton
      id="radioButton-example-radioButton-10"
      label="I accept the terms and conditions."
      value="agree"
      name="terms"
      checked={checkedValue === 'agree'}
      isRequired
      onChange={(event) => setCheckedValue(event.target.value)}
    />
    <RadioButton
      id="radioButton-example-radioButton-11"
      label="I do not accept the terms and conditions."
      value="disagree"
      name="terms"
      checked={checkedValue === 'disagree'}
      onChange={(event) => setCheckedValue(event.target.value)}
    />
  </Fieldset>
</>
```

Error Message example: The `errorMessage` property of the Fieldset wrapping the radio buttons is set.

```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';

const [checkedValue, setCheckedValue] = useState('');

<>
  <Fieldset
    legend="Terms and Conditions"
    isBorderVisible
    isLegendVisible
    legendDescription="Note: * denoted required information"
    errorMessage="Error: Please make a selection before proceeding."
  >
    <RadioButton
      id="radioButton-example-radioButton-12"
      label="I accept the terms and conditions."
      value="accept"
      name="conditions"
      checked={checkedValue === 'accept'}
      isRequired
      onChange={(event) => setCheckedValue(event.target.value)}
    />
    <RadioButton
      id="radioButton-example-radioButton-13"
      label="I do not accept the terms and conditions."
      value="decline"
      name="conditions"
      checked={checkedValue === 'decline'}
      onChange={(event) => setCheckedValue(event.target.value)}
    />
  </Fieldset>
</>
```
