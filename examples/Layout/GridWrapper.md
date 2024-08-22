*Note: this example is a placeholder until the `GridContainer` and `GridItem` components are finished.

The `GridWrapper` is the top-level of the grid structure. It defines the 12-column grid, with space between rows and columns. It can be used to embed grids within other components, letting us define sub-grid arrangements when needed.

It does not apply any margins, padding, additional borders shadows, or other styling, which should be handled by parent/child components instead.

```jsx
    <div>
    <h2>Small Gap (default)</h2>
      <GridWrapper gap="small">
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
      </GridWrapper>
      <br/>
      <h2>Medium Gap</h2>
      <GridWrapper>
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
      </GridWrapper>
      <br/>
      <h2>Large Gap</h2>
      <GridWrapper gap="large">
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>
        <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>
        <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>
      </GridWrapper>
      </div>
```