import React, { useRef } from 'react';
import assert, {
  strictEqual,
} from 'assert';
import {
  render,
  fireEvent,
  BoundFunction,
  GetByText,
  waitFor,
} from 'test-utils';
import {
  spy,
  SinonSpy,
} from 'sinon';
import { VARIANT } from '../../Theme';
import Button from '../Button';

describe('Button', function () {
  let getByText: BoundFunction<GetByText>;
  let clickSpy: SinonSpy;
  context('when disabled prop is false', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <Button
          id="testButton"
          onClick={clickSpy}
          variant={VARIANT.BASE}
        >
          Click You
        </Button>
      ));
    });
    afterEach(function () {
      clickSpy.resetHistory();
    });
    it('renders', function () {
      getByText('Click You');
    });
    it('calls the click handler when clicked', function () {
      fireEvent.click(getByText('Click You'));
      assert.strictEqual(clickSpy.callCount, 1);
    });
  });
  context('when disabled prop is true', function () {
    beforeEach(function () {
      clickSpy = spy();
      ({ getByText } = render(
        <Button
          id="testButton"
          onClick={clickSpy}
          variant={VARIANT.BASE}
          disabled
        >
          Not Clickable
        </Button>
      ));
    });
    afterEach(function () {
      clickSpy.resetHistory();
    });
    it('renders', function () {
      getByText('Not Clickable');
    });
    it('does not call the click handler when clicked', function () {
      fireEvent.click(getByText('Not Clickable'));
      assert.strictEqual(clickSpy.callCount, 0);
    });
  });
  context('when forwardRef prop is present', function () {
    beforeEach(function () {
      const ButtonRefExample = () => {
        const ref = useRef<HTMLButtonElement>(null);
        const onButtonClick = () => {
          ref.current.focus();
        };
        return (
          <>
            <Button
              id="testButton1"
              onClick={onButtonClick}
              variant={VARIANT.PRIMARY}
            >
              Focus the Other Button
            </Button>
            <Button
              id="testButton2"
              onClick={(): void => {}}
              variant={VARIANT.DANGER}
              forwardRef={ref}
            >
              Basic Button
            </Button>
          </>
        );
      };
      ({ getByText } = render(
        <ButtonRefExample />
      ));
    });
    it('can be used to shift the focus to the button', async function () {
      const initialButton = getByText('Focus the Other Button');
      initialButton.click();
      const basicButton = getByText('Basic Button');
      await waitFor(() => document.activeElement === basicButton);
      strictEqual(document.activeElement as HTMLElement, basicButton);
    });
  });
});
