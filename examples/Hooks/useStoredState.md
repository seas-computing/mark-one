```tsx
import React, { useState } from 'react';
import { Button, TextInput, Form, useStoredState } from 'mark-one';

const [text, setText] = useState('');
const [storedValue, setStoredValue] = useStoredState('academicYear', '');

<div>
  <p>
    <em>After entering text in the field below, click submit to update the data stored.</em>
  </p>

  <Form
    id="storedAcademicYearForm"
    label="Academic Year Form"
  >
    <TextInput
      isLabelVisible
      label="Academic Year"
      value={text}
      onChange={({ target }) => {
        setText(target.value);
      }}
    />
    <Button
      id="useStoredState-example-button-1"
      onClick={() => {
        setStoredValue(text);
        setText('');
      }}
    >
      Submit
    </Button>
  </Form>

  <div>
    Stored Academic Year: {storedValue}
  </div>
</div>
```
