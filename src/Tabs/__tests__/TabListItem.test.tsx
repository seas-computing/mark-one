import React from 'react';
import { render, BoundFunction, AllByRole } from 'test-utils';
import { strictEqual } from 'assert';
import TabList from '../TabList';
import TabListItem from '../TabListItem';

describe('TabListItem Component', function () {
  let getAllByRole: BoundFunction<AllByRole>;
  beforeEach(function () {
    ({ getAllByRole } = render(
      <TabList>
        <TabListItem>Tab 1</TabListItem>
        <TabListItem isActive data-testid="activeTabItem">Tab 2</TabListItem>
        <TabListItem data-testid="inactiveTabItem">Tab 3</TabListItem>
      </TabList>
    ));
  });
  describe('Tab Item', function () {
    it('renders its children', function () {
      const tabItems = getAllByRole('tab');
      strictEqual(tabItems.length, 3);
    });
    it('renders the tabs as being selected or unselected accordingly', function () {
      const tabItems = getAllByRole('tab');
      const tab1 = tabItems[0].getAttribute('aria-selected');
      const tab2 = tabItems[1].getAttribute('aria-selected');
      const tab3 = tabItems[2].getAttribute('aria-selected');
      strictEqual(tab1, null);
      strictEqual(tab2, 'true');
      strictEqual(tab3, null);
    });
  });
});
