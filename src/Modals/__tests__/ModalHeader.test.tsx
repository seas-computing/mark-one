import React from 'react';
import { strictEqual } from 'assert';
import { spy, SinonSpy } from 'sinon';
import {
  render,
  fireEvent,
  BoundFunction,
  QueryByBoundAttribute,
} from 'test-utils';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';

describe('Modal Header', function () {
  describe('closeButtonHandler prop', function () {
    let cbHandler: SinonSpy;
    beforeEach(function () {
      cbHandler = spy();
    });
    context('When a handler is passed in', function () {
      let queryByTitle: BoundFunction<QueryByBoundAttribute>;
      beforeEach(function () {
        ({ queryByTitle } = render(
          <Modal
            ariaLabelledBy="facultyEditButton"
            isVisible
          >
            <ModalHeader
              closeButtonHandler={cbHandler}
            >
              Modal Title
            </ModalHeader>
          </Modal>
        ));
      });
      it('Should render the close button', function () {
        const closeButton = queryByTitle('Close Modal');
        // strictEqual(modal, null) was causing an OOM crash when the test
        // failed, but this works fine
        strictEqual(closeButton === null, false);
      });
      it('Should call the closeButtonHandler when the button is clicked', function () {
        const closeButton = queryByTitle('Close Modal');
        const callCountBefore = cbHandler.callCount;
        fireEvent.click(closeButton);
        strictEqual(cbHandler.callCount, callCountBefore + 1);
      });
    });
  });
  describe('Title Text', function () {
    let cbHandler: SinonSpy;
    beforeEach(function () {
      cbHandler = spy();
    });
    it('Renders the title text in an h2', function () {
      const { getByText } = render(
        <Modal
          ariaLabelledBy="facultyEditButton"
          isVisible
        >
          <ModalHeader
            closeButtonHandler={cbHandler}
          >
            Title Text
          </ModalHeader>
        </Modal>
      );
      const title = getByText('Title Text');
      strictEqual(title.tagName, 'H2');
    });
  });
});
