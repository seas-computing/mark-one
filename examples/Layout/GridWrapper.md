*Note: this example is a placeholder until the `GridContainer` and `GridItem` components are finished.

The `GridWrapper` is the top-level of the grid structure. It defines the 12-column grid, with space between rows and columns. It can be used to embed grids within other components, letting us define sub-grid arrangements when needed.

It does not apply any margins, padding, additional borders shadows, or other styling, which should be handled by parent/child components instead.

The `gap` prop defaults to `null`, allowing the gap size to be set conditionally. If `gap` is not provided, it defaults to `small` for screen widths above 768px and `xsmall` for screen widths 768px and below.

```jsx
    <div>
    <h2>Xsmall Gap</h2>
    <p>If gap is not provided, xsmall will be used for screen widths 768px and below. To demonstrate how this gap size will appear, xsmall is being passed in here, but would not need to be in this use case.</p>
      <GridWrapper gap='xsmall'>
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
      </GridWrapper>
    <br/>
    <h2>Small Gap </h2>
    <p>If gap is not provided, small will be used for screen widths above 768px.</p>
      <GridWrapper>
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
      </GridWrapper>
      <br/>
      <h2>Medium Gap</h2>
      <GridWrapper gap='medium'>
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
      </GridWrapper>
      <br/>
      <h2>Large Gap</h2>
      <GridWrapper gap='large'>
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
      </GridWrapper>
      </div>
```