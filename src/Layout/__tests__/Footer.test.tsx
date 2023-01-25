import React from 'react';
import { strictEqual } from 'assert';
import { render } from 'test-utils';
import Footer from '../Footer';

describe('Footer', function () {
  const footerText = 'Version 10.0';
  it('renders any content provided', function () {
    const { childElementCount, firstChild, textContent } = render(
      <Footer>
        <span>{footerText}</span>
      </Footer>
    ).getByRole('contentinfo');

    strictEqual(childElementCount, 1);
    strictEqual(textContent, footerText);
    strictEqual(firstChild.nodeName, 'SPAN');
  });
});
