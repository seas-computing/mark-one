import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { VARIANT } from '../Theme';

export interface IconLinkProps {
  /** Specifies the URL the user will be directed to when the link is clicked */
  href?: string;
  /** Specifies the tooltip text */
  title: string;
  /** Specifies the alt text for screen readers */
  alt: string;
  /** Allows you to pass in a variant property from the VARIANT enum */
  variant?: VARIANT;
  /** Specifies the Font Awesome Icon(s) */
  children: ReactElement<FontAwesomeIconProps>;
}

interface StyledIconLinkProps {
  variant?: VARIANT;
}

const StyledIconLink = styled.a<StyledIconLinkProps>`
  background: transparent;
  color: ${({ variant = VARIANT.BASE, theme }) => theme.color.background[variant].medium};
  &:hover {
    color: ${({ variant = VARIANT.BASE, theme }) => theme.color.background[variant].dark};
    cursor: pointer;
  }
  display: inline-block;
`;

const IconLink: FunctionComponent<IconLinkProps> = (props): ReactElement => {
  const {
    href,
    title,
    alt,
    children,
    variant,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledIconLink
      href={href}
      title={title}
      theme={theme}
      aria-label={alt}
      role="link"
      variant={variant}
    >
      { children }
    </StyledIconLink>
  );
};

IconLink.defaultProps = {
  href: '',
  variant: VARIANT.INFO,
};

export default IconLink;
