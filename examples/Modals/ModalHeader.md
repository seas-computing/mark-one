This is a utility component for adding a header to the `<Modal>`.

```jsx
import { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from 'mark-one';

const [modalVisible, setModalVisible] = useState(false);

<>
  <Button
    id="modalHeader-example-button-1"
    onClick={() => {setModalVisible(true)}}
  >
    Open Modal
  </Button>
  <Modal
    ariaLabelledBy="modalHeader-example-button-1"
    closeHandler={() => {setModalVisible(false)}}
    isVisible={modalVisible}
  >
    <ModalHeader
      closeButtonHandler={() => {setModalVisible(false)}}
    >
      Modal Header
    </ModalHeader>
    <ModalBody>
      <div>
        This can be any arbitrary content
      </div>
    </ModalBody>
    <ModalFooter>
      <Button
        id="modalHeader-example-button-2"
        onClick={() => setModalVisible(false)}
      >
        Close Modal
      </Button>
    </ModalFooter>
  </Modal>
</>
```

### With the `forwardRef`
Ref example: The optional `forwardRef` property is set. When the test button is
clicked, the focus shifts to the modal header.
```jsx
import { useState, useRef, } from 'react';
import { VARIANT } from 'Theme';
import {
  Button,
  Dropdown,
  Modal,
  ModalBody,
} from 'mark-one';

const RefExample = () => {
  const ref = useRef(null);
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const onButtonClick = () => {
    setModalVisible(true);
    /* Since modal may not have been rendered in DOM, wait for it to be
    rendered by letting next task of event queue run first */
    setTimeout(() => ref.current.focus());
  }
  return (
    <>
      <Button
        id="modalHeader-example-button-3"
        onClick={onButtonClick}
        variant={VARIANT.INFO}
      >
        Focus the Header
      </Button>
      <Modal
        ariaLabelledBy="modalHeader-example-button-3"
        closeHandler={() => {setModalVisible(false)}}
        isVisible={modalVisible}
      >
        <ModalHeader
          closeButtonHandler={() => {setModalVisible(false)}}
          tabIndex={0}
          forwardRef={ref}
        >
          Modal Header
        </ModalHeader>
        <ModalBody>
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
            value={value}
            id="semesters"
            name="semesters"
            onChange={(event) => {
              setValue(event.target.value);
              alert('You changed the selection to ' + event.target.value);
            }}
            label="Semester"
          />
          <Button
            id="modalHeader-example-button-4"
            onClick={() => setModalVisible(false)}
            variant={VARIANT.BASE}
          >
            Close Modal
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
};
<RefExample />
```
