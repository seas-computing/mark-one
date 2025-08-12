The `CenterContainer` is a wrapper component that horizontally centers content on the page.

This example shows the content being centered within the available space.

```jsx
import { PageWrapper, SectionHeading, SectionSubHeading, Link, Button, ExternalLink, VARIANT } from 'mark-one';

<CenterContainer>
  <div>
    <SectionHeading>Account Access</SectionHeading>
    <SectionSubHeading> If you're a Harvard Affiliate</SectionSubHeading>
    <p>
      To register for a new account or log in to your existing account,
      visit the log in page.
    </p>
    <br />
    <p>
      If you haven't yet claimed your HarvardKey, visit
      {' '}
      <ExternalLink href="https://key.harvard.edu/" rel="nofollow">
        Welcome to HarvardKey
      </ExternalLink>
      .
    </p>
    <SectionSubHeading>
      If you're not a Harvard Affiliate
    </SectionSubHeading>
    <p>
      Contact
      {' '}
      <ExternalLink href="https://seas.harvard.edu/teaching-and-learning" rel="nofollow">
        Teaching & Learning Administration
      </ExternalLink>
      {' '}
      for assistance in setting up an account.
    </p>
  </div>
</CenterContainer>
```