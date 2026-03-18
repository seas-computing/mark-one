import React from 'react';
import {
  render, BoundFunction, GetByRole,
} from 'test-utils';
import { strictEqual } from 'assert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import IconLink from '../IconLink';

describe('Icon Link', function () {
  let getByRole: BoundFunction<GetByRole>;
  beforeEach(function () {
    ({ getByRole } = render(
      <IconLink title="Edit account information" alt="Edit account information">
        <FontAwesomeIcon icon={faEdit} />
      </IconLink>
    ));
  });
  it('renders', function () {
    getByRole('link');
  });
  it('renders the correct icon', function () {
    const iconName = getByRole('img', { hidden: true });
    const classes = Array.from(iconName.classList);
    strictEqual(classes.includes('fa-edit'), true);
  });
});
