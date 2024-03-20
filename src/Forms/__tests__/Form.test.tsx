import { Button } from 'Buttons';
import { Form, TextInput } from 'Forms';
import { VARIANT } from 'Theme';
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
  let onChangeStub: SinonStub;

  beforeEach(function () {
    submitStub = stub();
    const renderResult = render(
      <Form
        id="testForm"
        label="Test Form"
        submitHandler={submitStub}
      >
        <TextInput
          id="testInput"
          name="testInput"
          label="Test Input"
          value="Test Value"
          onChange={onChangeStub}
        />
        <Button
          id="testButton"
          form="testForm"
          type="submit"
          variant={VARIANT.PRIMARY}
          onClick={submitStub}
        />
      </Form>
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
