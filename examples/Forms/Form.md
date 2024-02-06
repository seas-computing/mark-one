This Form component adds a margin to each of its direct children.
```jsx
import {
  TextInput,
  Fieldset,
  Checkbox,
  Button,
  Dropdown,
  RadioButton,
  VARIANT,
  POSITION
} from 'mark-one';
import { useState } from 'react';

const [requiredCheckbox, setRequiredCheckbox] = useState(false);
const [undergraduateCheckbox, setUndergraduateCheckbox] = useState(false);
const [checkboxValue, setCheckboxValue] = useState('fall');
const [radioCheckedValue, setRadioCheckedValue] = useState('');
const [notesValue, setNotesValue] = useState('');

<Form
  id="testForm"
  label="New Student Registration Form"
>
  <Fieldset
    legend="Appointment Time Preference"
    isBorderVisible
    isLegendVisible
  >
    <RadioButton
      label="Morning"
      value="morning"
      name="visibleFieldsetTest"
      checked={radioCheckedValue === 'morning'}
      onChange={(event) => setRadioCheckedValue(event.target.value)}
    />
    <RadioButton
      label="Noon"
      value="noon"
      name="visibleFieldsetTest"
      checked={radioCheckedValue === 'noon'}
      onChange={(event) => setRadioCheckedValue(event.target.value)}
    />
    <RadioButton
      label="Evening"
      value="evening"
      name="visibleFieldsetTest"
      checked={radioCheckedValue === 'evening'}
      onChange={(event) => setRadioCheckedValue(event.target.value)}
    />
  </Fieldset>
  <Fieldset
    legend="Class Level Information"
    isBorderVisible={false}
    isLegendVisible={false}
  >
    <Checkbox
      id="form-example-checkbox-1"
      checked={undergraduateCheckbox}
      label="Undergraduate"
      onChange={(event) => {
        setUndergraduateCheckbox(!undergraduateCheckbox);
      }}
      hideError
    />
  </Fieldset>
  <Dropdown
    options={[
      {
        value: 'all',
        label: 'All',
      },
      {
        value: 'fall',
        label: 'Fall',
      },
      {
        value: 'spring',
        label: 'Spring',
      },
    ]}
    value={checkboxValue}
    id="testSemestersDropdown"
    name="semesters"
    onChange={function(event){
      setCheckboxValue(event.target.value);
    }}
    label="Semester"
    labelPosition={POSITION.TOP}
  />
  <TextInput
    id="testNotes"
    name="notes"
    value={notesValue}
    labelPosition={POSITION.TOP}
    label="Notes"
    onChange={(event) => {
    setNotesValue(event.target.value);
  }}
  />
  <Button
    id="form-example-button-1"
    onClick={() => {
      alert('You clicked the primary button')
    }}
    variant={VARIANT.PRIMARY}
  >
    Submit
  </Button>
</Form>
```

A `Form` component may also have an `onSubmit` handler too. This can be used to
handle the semantic submission of a form, like so:

```jsx
import {
  TextInput,
  Button,
  POSITION,
  VARIANT,
} from 'mark-one';
import { useState } from 'react';

const [text, setText] = useState('');
const [items, setItems] = useState(['Eggs', 'Milk']);

const submitHandler = () => {
  setItems((prev) => prev.concat(text));
  setText('');
}

<Form
  label="Grocery List"
  submitHandler={submitHandler}
>
  <TextInput
    name="add-item"
    value={text}
    labelPosition={POSITION.TOP}
    label="Add Item"
    onChange={(event) => {
      setText(event.target.value);
    }}
  />
  <ul>
    {items.map((item, index) => (<li key={item+index}>{item}</li>))}
  </ul>
  <Button
    id="form-example-button-2"
    variant={VARIANT.PRIMARY}
  >
    Submit
  </Button>
</Form>
```
