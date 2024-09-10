The `GridContainer` is a low-level piece of the layout grid. It represents a sub-component of a larger grid, intended for use with multiple child components, and may itself contain another grid layout. It should be placed inside a `GridWrapper` and can contain `GridItem` components.

This example demonstrates how **different widths** affect the layout of the grid items.

```jsx
import { GridWrapper } from 'mark-one';

<GridWrapper gap="large">
  <GridContainer width={2} placement="left">
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      Width 2
    </div>
  </GridContainer>
  <GridContainer width={4} placement="left">
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
      Width 4
    </div>
  </GridContainer>
  <GridContainer width={6} placement="left">
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>
      Width 6
    </div>
  </GridContainer>
</GridWrapper>
```

This example demonstrates how **different placements** affect the alignment of the grid items.

```jsx
import { GridWrapper } from 'mark-one';

<GridWrapper gap="large">
  <GridContainer width={4} placement="left">
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      Left Placement
    </div>
  </GridContainer>
  <GridContainer width={4} placement="center">
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
      Center Placement
    </div>
  </GridContainer>
  <GridContainer width={4} placement="right">
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>
      Right Placement
    </div>
  </GridContainer>
</GridWrapper>
```

This example demonstrates a combination of **different widths and placements**.

```jsx
import { GridWrapper } from 'mark-one';

<GridWrapper gap="large">
  <GridContainer width={3} placement="left">
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      Width 3, Left
    </div>
  </GridContainer>
  <GridContainer width={6} placement="center">
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
      Width 6, Center
    </div>
  </GridContainer>
  <GridContainer width={3} placement="right">
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>
      Width 3, Right
    </div>
  </GridContainer>
</GridWrapper>
```

This example demonstrates how to place items starting from **specific columns**.

```jsx
import { GridWrapper } from 'mark-one';

<GridWrapper gap="small">
  <GridContainer width={4} placement={2}>
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      Start at Column 2
    </div>
  </GridContainer>
  <GridContainer width={4} placement={6}>
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
      Start at Column 6
    </div>
  </GridContainer>
  <GridContainer width={4} placement={10}>
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>
      Start at Column 10
    </div>
  </GridContainer>
</GridWrapper>
```