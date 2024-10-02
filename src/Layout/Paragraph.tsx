import styled from 'styled-components';
import { PropsWithChildren, ReactElement } from 'react';
import { fromTheme } from '../Theme';

const Paragraph = styled.p`
  padding-right: 25%;
  margin-bottom: ${fromTheme('ws', 'medium')};
`;

declare type Paragraph = ReactElement<PropsWithChildren>;

export default Paragraph;
