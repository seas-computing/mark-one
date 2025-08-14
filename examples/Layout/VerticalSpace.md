The `VerticalSpace` component is used for adding consistent vertical spacing between other page components, as demonstrated below.

This example shows the use of the `VerticalSpace` component between a `SectionHeading` and `SectionSubHeading`s as well as how two `SectionSubHeading`s look together without the `VerticalSpace`.

```jsx
import { SectionHeading, SectionSubHeading, VerticalSpace } from 'mark-one';

<div>
  <SectionHeading>
    Heading
  </SectionHeading>
  <VerticalSpace/>
  <SectionSubHeading>
    Subheading 1
  </SectionSubHeading>
  <VerticalSpace/>
  <SectionSubHeading>
    Subheading 2
  </SectionSubHeading>
  <SectionSubHeading>
    Subheading without spacing above
  </SectionSubHeading>
</div>
```