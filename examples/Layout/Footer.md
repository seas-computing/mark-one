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

The `position` prop can be used to control how the footer is positioned on the
page. By default, the footer will be `sticky`, appearing `fixed` while
scrolling the page, then `relative` when it reaches the bottom of the content.
You can set it to always appear at the end of the content by setting position
to `relative`."


```jsx
<Footer position="relative">
  <div>Version 10.0</div>
</Footer>
```

An unordered list can be provided to the `Footer`, and each list item will be spaced accordingly.
```jsx
import { ExternalLink } from 'mark-one';

<Footer justify="center">
  <ul>
    <li><ExternalLink href="https://seas.harvard.edu/office-diversity-inclusion-and-belonging/about-us" rel="nofollow">Diversity Mission</ExternalLink></li>
    <li><ExternalLink href="https://trademark.harvard.edu/pages/trademark-notice" rel="nofollow">Trademark Notice</ExternalLink></li>
    <li><ExternalLink href="https://accessibility.huit.harvard.edu/digital-accessibility-policy" rel="nofollow">Accessibility Policy</ExternalLink></li>
    <li><ExternalLink href="https://seas.harvard.edu/privacy-policy" rel="nofollow">Privacy Policy</ExternalLink></li>
  </ul>
</Footer>
```
