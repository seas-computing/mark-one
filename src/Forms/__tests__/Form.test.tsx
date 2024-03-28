import { Form } from 'Forms';
import { strictEqual } from 'assert';
import React from 'react';
import { SinonStub, stub } from 'sinon';
import {
  fireEvent,
  render,
} from 'test-utils';

describe('Form', function () {
  let form: HTMLFormElement;
  let submitStub: SinonStub;

  beforeEach(function () {
    submitStub = stub();
    const renderResult = render(
      <Form
        id="testForm"
        label="Test Form"
        submitHandler={submitStub}
      />
    );
    form = renderResult.getByRole('form') as HTMLFormElement;
  });
  describe('submitHandler', function () {
    it('is called when the form is submitted', function () {
      fireEvent.submit(form);
      strictEqual(submitStub.called, true);
    });
  });
});
