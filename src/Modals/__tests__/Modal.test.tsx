import React, { useState, FunctionComponent, useRef } from 'react';
import { strictEqual } from 'assert';
import {
  stub, SinonStub,
} from 'sinon';
import {
  render,
  fireEvent,
  BoundFunction,
  FindByRole,
} from 'test-utils';
import Modal from 'Modals/Modal';
import { Button } from 'Buttons';
import { VARIANT } from 'Theme';
import { ModalHeader } from 'Modals';

describe('Modal', function () {
  let findByRole: BoundFunction<FindByRole>;
  describe('isVisible prop', function () {
    context('When isVisible is false', function () {
      it('Should not render any visible content', function () {
        const { queryByText } = render(
          <Modal
            ariaLabelledBy="facultyEditButton"
            isVisible={false}
          >
            hidden
          </Modal>
        );
        const modal = queryByText('hidden');
        // strictEqual(modal, null) was causing an OOM crash when the test
        // failed, but this works fine
        strictEqual(modal === null, true);
      });
    });
    context('When isVisible is true', function () {
      it('Should render visible content', function () {
        const { getByText } = render(
          <Modal
            ariaLabelledBy="facultyEditButton"
            isVisible
          >
            displayed
          </Modal>
        );
        const modal = getByText('displayed');
        strictEqual(modal === null, false);
      });
      it('Should have the specified value for the property aria-labelledBy', function () {
        const { getByText } = render(
          <Modal
            ariaLabelledBy="facultyEditButton"
            isVisible
          >
            displayed
          </Modal>
        );
        const modal = getByText('displayed');
        strictEqual(modal.getAttribute('aria-labelledBy'), 'facultyEditButton');
      });
    });
    context('when forwardRef prop is present', function () {
      beforeEach(function () {
        const RefExample = () => {
          const testRef = useRef<HTMLDivElement>(null);
          const [modalVisible, setModalVisible] = useState(false);
          const onButtonClick = () => {
            setModalVisible(true);
            setTimeout(() => {
              if (testRef.current) {
                testRef.current.focus();
              }
            });
          };
          return (
            <>
              <Button
                id="testButton"
                onClick={onButtonClick}
                variant={VARIANT.INFO}
              >
                Focus the Modal Header
              </Button>
              <Modal
                ariaLabelledBy="testButton"
                closeHandler={() => { setModalVisible(false); }}
                isVisible={modalVisible}
              >
                <ModalHeader
                  closeButtonHandler={() => { setModalVisible(false); }}
                  tabIndex={0}
                  forwardRef={modalVisible ? testRef : null}
                >
                  Modal Header
                </ModalHeader>
              </Modal>
            </>
          );
        };
        ({ findByRole } = render(
          <RefExample />
        ));
      });
      it('can be used to shift the focus to the modal header on button click', async function () {
        const testButton = document.getElementById('testButton') as HTMLButtonElement;
        testButton.click();
        await findByRole('heading');
        strictEqual((document.activeElement as HTMLElement).textContent.includes('Modal Header'), true);
      });
      it('will focus back on the first focusable element after cycling through modal elements', async function () {
        const testButton = document.getElementById('testButton') as HTMLButtonElement;
        testButton.click();
        await findByRole('heading');
        fireEvent.keyPress(await findByRole('heading'), { key: 'Tab', code: 'Tab' });
        strictEqual((document.activeElement as HTMLElement).textContent.includes('Modal Header'), true);
      });
    });
  });
  describe('closeHandler', function () {
    let closeHandlerStub: SinonStub;
    let ModalOpener: FunctionComponent;
    beforeEach(function () {
      closeHandlerStub = stub();
      ModalOpener = () => {
        const [modalOpen, setModalOpen] = useState(false);
        return (
          <div>
            <button
              type="button"
              onClick={() => { setModalOpen(!modalOpen); }}
            >
              Toggle Modal
            </button>
            <Modal
              ariaLabelledBy="facultyEditButton"
              isVisible={modalOpen}
              closeHandler={closeHandlerStub}
            >
              Contents
            </Modal>
          </div>
        );
      };
    });
    context('When the backdrop is clicked', function () {
      beforeEach(function () {
        const { getByText } = render(<ModalOpener />);
        fireEvent.click(getByText('Toggle Modal'));
        const backdrop = document.querySelector('.modal-fade-enter');
        fireEvent.click(backdrop);
      });
      it('Should call the closeHandler', function () {
        strictEqual(closeHandlerStub.callCount, 1);
      });
    });
    context('When the modal is clicked', function () {
      beforeEach(function () {
        const { getByText } = render(<ModalOpener />);
        fireEvent.click(getByText('Toggle Modal'));
        const modalContents = getByText('Contents');
        fireEvent.mouseDown(modalContents);
        fireEvent.mouseUp(modalContents);
      });
      it('Should not call the closeHandler', function () {
        strictEqual(closeHandlerStub.callCount, 0);
      });
    });
    context('When a mousedown event occurs on the modal and a mouseup event occurs on the backdrop', function () {
      beforeEach(function () {
        const { getByText } = render(<ModalOpener />);
        fireEvent.click(getByText('Toggle Modal'));
        const modalContents = getByText('Contents');
        fireEvent.mouseDown(modalContents);
        const backdrop = document.querySelector('.modal-fade-enter');
        fireEvent.mouseUp(backdrop);
      });
      it('Should not call the closeHandler', function () {
        strictEqual(closeHandlerStub.callCount, 0);
      });
    });
  });
});
