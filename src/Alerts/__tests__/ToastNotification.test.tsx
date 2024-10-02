import React from 'react';
import { strictEqual } from 'assert';
import {
  render,
  fireEvent,
  BoundFunction,
  GetByText,
} from 'test-utils';
import {
  spy,
  SinonSpy,
} from 'sinon';
import { ToastNotification } from 'Alerts';

describe('Toast Notification', function () {
  let getByText: BoundFunction<GetByText>;
  let getByLabelText: BoundFunction<GetByText>;
  let clickSpy: SinonSpy;
  const id = 'test';
  const alertMessage = 'Test Notification';
  const buttonAltText = `${id} close button`;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText, getByLabelText } = render(
      <ToastNotification
        id={id}
        onClick={clickSpy}
      >
        Test Notification
      </ToastNotification>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
  });
  it('renders the message', function () {
    getByText(alertMessage);
  });
  it('calls the click handler when the close button is clicked', function () {
    fireEvent.click(getByLabelText(buttonAltText));
    strictEqual(clickSpy.callCount, 1);
  });
});
