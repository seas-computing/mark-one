import React from 'react';
import {
  render,
  fireEvent,
  getByRole,
  BoundFunction,
  GetByText,
  QueryByText,
} from 'test-utils';
import { spy } from 'sinon';
import { strictEqual } from 'assert';
import userEvent from '@testing-library/user-event';
import TextInput from '../TextInput';

enum POSITION {
  TOP = 'top',
  LEFT = 'left',
}

describe('Text input', function () {
  let getByText: BoundFunction<GetByText>;
  let queryByText: BoundFunction<QueryByText>;
  let changeSpy;
  context('when errorMessage prop is present', function () {
    beforeEach(function () {
      changeSpy = spy();
      render(
        <TextInput
          id="semester"
          name="semester"
          value="Spring"
          errorMessage="Error: Please enter a valid ID"
          label="semester"
          onChange={changeSpy}
        />
      );
    });
    // getByText method does not work with text fields, so we are using the below
    // as an alternative way to test that the component renders
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementById('semester'), {
        target: {
          value: 'Fall',
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct default value', function () {
      const inputField = document.getElementById('semester') as HTMLInputElement;
      const defaultValue = inputField.value;
      strictEqual(defaultValue, 'Spring');
    });
    it('renders the error message', function () {
      const inputField = document.getElementById('semester') as HTMLInputElement;
      const errorMessage = getByRole(inputField.parentNode as HTMLElement, 'alert');
      strictEqual(errorMessage.textContent.trim(), 'Error: Please enter a valid ID');
    });
  });
  context('when errorMessage prop is not present', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ queryByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Spring"
          label="semester"
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementById('semester'), {
        target: {
          value: 'Fall',
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct default value', function () {
      const inputField = document.getElementById('semester') as HTMLInputElement;
      const defaultValue = inputField.value;
      strictEqual(defaultValue, 'Spring');
    });
    it('does not render the error message', function () {
      const errorField = queryByText('error');
      strictEqual(errorField, null);
    });
  });
  context('when isLabelVisible prop is true', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Spring"
          label="visibleLabel"
          isLabelVisible
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementById('semester'), {
        target: {
          value: 'Fall',
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Spring');
    });
    it('has a visible label', function () {
      getByText('visibleLabel');
    });
  });
  context('when isLabelVisible prop is false', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Spring"
          label="invisibleLabel"
          isLabelVisible={false}
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementById('semester'), {
        target: {
          value: 'Fall',
        },
      });
      strictEqual(changeSpy.callCount, 1);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Spring');
    });
    it('the label value is hidden in the UI', function () {
      const style = window.getComputedStyle(getByText('invisibleLabel'));
      strictEqual(style.display, 'none');
    });
  });
  context('when disabled prop is true', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Fall"
          label="visibleLabel"
          disabled
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Fall');
    });
    it('does not call the change handler when user tries to change the input', function () {
      userEvent.type(document.getElementById('semester'), 'Spring');
      strictEqual(changeSpy.callCount, 0);
    });
  });
  context('when labelPosition prop is equal to POSITION.TOP', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Fall"
          label="visibleLabel"
          labelPosition={POSITION.TOP}
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Fall');
    });
    it('positions the label above the text input field', function () {
      const style = window.getComputedStyle(getByText('visibleLabel').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"l l l" "i i i" "e e e"');
    });
  });
  context('when labelPosition prop is equal to POSITION.LEFT', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText } = render(
        <TextInput
          id="semester"
          name="semester"
          value="Fall"
          label="visibleLabel"
          labelPosition={POSITION.LEFT}
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      const inputElement = document.getElementById('semester') as HTMLInputElement;
      strictEqual(!!inputElement, true);
    });
    it('renders the correct default value', function () {
      const { value } = document.getElementById('semester') as HTMLInputElement;
      strictEqual(value, 'Fall');
    });
    it('positions the label to the left of the text input field', function () {
      const style = window.getComputedStyle(getByText('visibleLabel').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"l i i" ". e e"');
    });
  });
});