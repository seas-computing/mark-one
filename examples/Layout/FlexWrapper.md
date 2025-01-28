Provides a flexible layout container for arranging child elements. All CSS values associated with the `flex-direction`, `justify-content` and `align-items` attributes are optionally available.

In this example, two FlexWrappers are being used. A FlexWrapper is surrounding both the TextDisplay and the Table, with `alignItems` set to `flex-end` so that both hug the right side of the display area. The `gap` property is set to 'medium' to provide sufficient spacing between items. The second FlexWrapper is being used to arrange the 'Confirm' and 'Cancel' buttons in the second row of the Table. In this FlexWrapper, the `justifyContent` prop is set to 'space-evenly' while the other props use the default settings.

```jsx
import { ALIGN, Button, Stat, Table, TableBody, TableCell, TableHead, TableHeadingCell, TableRow, TextDisplay, VARIANT } from 'mark-one';

<FlexWrapper flexDirection='column' alignItems='flex-end' gap='medium'>
  <TextDisplay id="numKiosks" label="Number of Kiosks" value='2'></TextDisplay>
  <Table>
    <TableHead>
      <TableRow>
        <TableHeadingCell scope='col'>Kiosk Name</TableHeadingCell>
        <TableHeadingCell scope='col'>Status</TableHeadingCell>
        <TableHeadingCell scope='col'>Update Activation</TableHeadingCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell alignment={ALIGN.CENTER}>
            'Kiosk A'
        </TableCell>
        <TableCell alignment={ALIGN.CENTER}>'Active'</TableCell>
        <TableCell alignment={ALIGN.CENTER}>
            <Button variant={VARIANT.DANGER}>
                Deactivate
              </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell alignment={ALIGN.CENTER}>
          'Kiosk B'
        </TableCell>
          <TableCell alignment={ALIGN.CENTER}>'Pending'</TableCell>
          <TableCell alignment={ALIGN.CENTER}>
            <FlexWrapper justifyContent='space-evenly'>
              <Button variant={VARIANT.PRIMARY}>
              Confirm
              </Button>
              <Button variant={VARIANT.DANGER} >
              Cancel
              </Button>
            </FlexWrapper>
          </TableCell>
        </TableRow>
    </TableBody>
  </Table>
</FlexWrapper>
```

This example demonstrates a column orientation and nested FlexWrappers with different values for some of the props. The nested FlexWrapper around the buttons also makes use of the gap property, which is necessary for providing spacing when flex items are in column orientation.

```jsx
import { useState } from 'react';
import { Callout, Combobox, Paragraph, SectionHeading, VARIANT } from 'mark-one';

const foodOptions = [
  {
    label: 'Apples',
    value: 'a',
  },
  {
    label: 'Bananas',
    value: 'b',
  },
  {
    label: 'Cucumbers',
    value: 'c',
  },
  {
    label: 'Donuts',
    value: 'd',
  }
];

const drinkOptions = [
  {
    label: 'Apple juice',
    value: 'a',
  },
  {
    label: 'Banana smoothie',
    value: 'b',
  },
  {
    label: 'Coke',
    value: 'c',
  },
  {
    label: 'Dr. Pepper',
    value: 'd',
  }
];

const [valueOne, setValueOne] = useState(null);
const [valueTwo, setValueTwo] = useState(null);

<FlexWrapper flexDirection='column' justifyContent='center' alignItems='center' gap='xlarge'>
  <SectionHeading>Preferences</SectionHeading>
  <Callout variant={VARIANT.INFO} role='alert'>
  Select an item from each menu below.
  </Callout>
  <FlexWrapper flexDirection='row' justifyContent='space-between' gap='medium'>
  <Combobox
    isLabelVisible={true}
    options={foodOptions}
    label='Food'
    currentValue={valueOne}
    onOptionSelected={({ selectedItem }) => {setValueOne(selectedItem)}}
  />
  <Combobox
    isLabelVisible={true}
    options={drinkOptions}
    label='Drink'
    currentValue={valueTwo}
    onOptionSelected={({ selectedItem }) => {setValueTwo(selectedItem)}}
  />
  </FlexWrapper>
    <Paragraph>
    You chose: <strong>{valueOne && valueTwo ? valueOne.label + ' and ' + valueTwo.label : ''}</strong>
  </Paragraph>
</FlexWrapper>
```

