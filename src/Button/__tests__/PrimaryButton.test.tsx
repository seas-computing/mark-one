import React from 'react';
import { render, fireEvent } from 'test-utils';
import { spy, SinonSpy } from 'sinon';
import assert from 'assert';
import PrimaryButton from '../PrimaryButton';

describe('Primary Button', function () {
  let getByText;
  let clickSpy: SinonSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <>
        <PrimaryButton clickHandler={clickSpy}>
          Click Me
        </PrimaryButton>
        <PrimaryButton disabled clickHandler={clickSpy}>
          Not Clickable
        </PrimaryButton>
      </>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
  });
  it('renders', function () {
    getByText('Click Me');
  });
  it('calls the click handler when clicked', function () {
    fireEvent.click(getByText('Click Me'));
    assert.strictEqual(clickSpy.callCount, 1);
  });
  it('does not call the click handler when button prop disabled is truthy', function () {
    fireEvent.click(getByText('Not Clickable'));
    assert.strictEqual(clickSpy.callCount, 0);
  });
});
