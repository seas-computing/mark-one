This is a very basic component that just adds padding to make the main content of the modal line up with the `<ModalHeader>` and `<ModalFooter>`. This is optional, as the user may want to handle the layout and spacing for the content on their own.

```jsx
import { useState } from 'react';
import { Button, Modal } from 'mark-one';

const [modalVisible, setModalVisible] = useState(false);

<>
  <Button
    id="modalBody-example-button-1"
    onClick={() => {setModalVisible(true)}}
  >
    Open Modal
  </Button>
  <Modal
    ariaLabelledBy="modalBody-example-button-1"
    closeHandler={() => {setModalVisible(false)}}
    isVisible={modalVisible}
  >
    <ModalBody>
      <p>Any content can be placed inside the Modal Body</p>
      <Button
        id="modalBody-example-button-2"
        onClick={() => setModalVisible(false)}
      >
          Close Modal
      </Button>
    </ModalBody>
  </Modal>
</>
```

Overflow example: When the contents of the modal body exceeds the height of the page, the user can scroll to see the full contents of the modal.
```jsx
import { useState } from 'react';
import {
  Button,
  ModalHeader,
  Modal,
  Fieldset,
  Checkbox,
  TextInput,
  RadioButton,
  POSITION,
} from 'mark-one';

const [modalVisible, setModalVisible] = useState(false);
const [checkedValue, setCheckedValue] = useState('');

<>
  <Button
    id="modalBody-example-button-3"
    onClick={() => {setModalVisible(true)}}
  >
    Open Modal
  </Button>
  <Modal
    ariaLabelledBy="modalBody-example-button-3"
    closeHandler={() => {setModalVisible(false)}}
    isVisible={modalVisible}
  >
    <ModalHeader>Overflow Example</ModalHeader>
    <ModalBody>
      <>
        <Fieldset
          legend="Fieldset Legend"
          isBorderVisible={false}
          isLegendVisible={false}
        >
          <Checkbox
            id="modalBody-example-checkbox-1"
            label="Option 1"
            disabled
            checked
          />
          <Checkbox
            id="modalBody-example-checkbox-2"
            label="Option 2"
            disabled
            checked
          />
          <Checkbox
            id="modalBody-example-checkbox-3"
            label="Option 3"
            disabled
            checked
          />
          <Checkbox
            id="modalBody-example-checkbox-4"
            label="Option 4"
            disabled
            checked
          />
          <Checkbox
            id="modalBody-example-checkbox-5"
            label="Option 5"
            disabled
            checked
          />
          <Checkbox
            id="modalBody-example-checkbox-6"
            label="Option 6"
            disabled
            checked
          />
          <Checkbox
            id="modalBody-example-checkbox-7"
            label="Option 7"
            disabled
            checked
          />
          <Checkbox
            id="modalBody-example-checkbox-8"
            label="Option 8"
            disabled
            checked
          />
          <Checkbox
            id="modalBody-example-checkbox-9"
            label="Option 9"
            disabled
            checked
          />
          <Checkbox
            id="modalBody-example-checkbox-10"
            label="Option 10"
            disabled
            checked
          />
          <TextInput
            value="test"
            name="example"
            id="example"
            label="Description:"
            labelPosition={POSITION.TOP}
            disabled="disabled"
            onChange={() => {}}
          />
          <RadioButton
            label="One"
            value="one"
            name="quantity"
            checked={checkedValue === 'one'}
            onChange={(event) => setCheckedValue(event.target.value)}
          />
          <RadioButton
            label="Two"
            value="two"
            name="quantity"
            checked={checkedValue === 'two'}
            onChange={(event) => setCheckedValue(event.target.value)}
          />
        </Fieldset>
      </>
      <Button
        id="modalBody-example-button-4"
        onClick={() => setModalVisible(false)}
      >
          Close Modal
      </Button>
    </ModalBody>
  </Modal>
</>
```
