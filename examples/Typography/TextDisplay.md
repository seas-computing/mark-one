A corollary to the `TextInput`, the `TextDisplay` is intended for displaying a labeled piece of non-editable, informational text.

Label example: the optional `labelPosition` prop defaults to `POSITION.LEFT`.

```jsx
<TextDisplay id="example" label="Description" value="Display Text"></TextDisplay>
```

Label example: `labelPosition` prop is set to `POSITION.TOP`.
```jsx
<TextDisplay id="example" label="Description" value="Display Text" labelPosition="top"></TextDisplay>
```

Label example: the optional `isLabelVisible` prop is set to false.

```jsx
<TextDisplay id="example" label="Description" value="Display Text" isLabelVisible={false}></TextDisplay>
```
