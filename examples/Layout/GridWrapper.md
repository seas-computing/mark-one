The `GridWrapper` is the top-level of the grid structure. It defines the 12-column grid, with space between rows and columns. It can be used to embed grids within other components, letting us define sub-grid arrangements when needed.

It does not apply any margins, padding, additional borders shadows, or other styling, which should be handled by parent/child components instead.

The `gap` prop defaults to `null`, allowing the gap size to be set conditionally. If `gap` is not provided, it defaults to `small` for screen widths above 768px and `xsmall` for screen widths 768px and below.

<br />

The following example shows the **`xsmall`** gap size. To demonstrate how this gap size will appear, the `xsmall` gap size is being passed in here, but would not need to be for screen widths 768px and below.

```jsx
  <GridWrapper gap="xsmall">
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
  </GridWrapper>
  ```

  The following example shows the default **`small`** gap size. If gap is not provided, small will be used for screen widths above 768px.

  ```jsx
  <GridWrapper>
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
  </GridWrapper>
```

The following example shows the **`medium`** gap size.

```jsx
  <GridWrapper gap="medium">
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
  </GridWrapper>
  ```

  The following example shows the **`large`** gap size.

  ```jsx
  <GridWrapper gap="large">
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
  </GridWrapper>
```
