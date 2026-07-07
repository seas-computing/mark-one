This is a utility component for adding a footer row to the `<Modal>`. It's set up to use `flexbox`, and fill in buttons from right to left. For example:

```jsx
import { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from 'mark-one';

const [modalVisible, setModalVisible] = useState(false);
const modalTitleId = 'modalFooter-example-title';

<>
  <Button
    id="modalFooter-example-button-1"
    onClick={() => {setModalVisible(true)}}
  >
    Open Modal
  </Button>
  <Modal
    ariaLabelledBy={modalTitleId}
    closeHandler={() => {setModalVisible(false)}}
    isVisible={modalVisible}
  >
    <ModalHeader
      id={modalTitleId}
      closeButtonHandler={() => setModalVisible(false)}
    >
      Modal Footer Example
    </ModalHeader>
    <ModalBody>
      <div>
        This can be any arbitrary content
      </div>
    </ModalBody>
    <ModalFooter>
      <Button
        id="modalFooter-example-button-2"
        onClick={() => setModalVisible(false)}
      >
        One
      </Button>
      <Button
        id="modalFooter-example-button-3"
        onClick={() => setModalVisible(false)}
      >
        Two
      </Button>
      <Button
        id="modalFooter-example-button-4"
        onClick={() => setModalVisible(false)}
      >
        Three
      </Button>
    </ModalFooter>
  </Modal>
</>
```

