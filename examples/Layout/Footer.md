The Footer uses flexbox for positioning, and accepts a `justify` prop that controls the layout. The default value is `space-between`, which works well for multiple items:

```jsx
<Footer>
  <div>Privacy Policy</div>
  <div>Contact Us</div>
  <div>Terms of Service</div>
</Footer>
```

A value of `center` be used to position content around the center. (See [MDN's docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) for all supported values).

```jsx
<Footer justify="center">
  <div>Version 10.0</div>
</Footer>
```

You can also pass in a custom `background` prop to replace the default transparent background.

```jsx
<Footer justify="center" background="#eafeaf">
  <div>Version 10.0</div>
</Footer>
```
