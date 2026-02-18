import { styled } from 'styled-components';
import { fromTheme } from '../Theme';

/**
 * A component for adding consistent vertical spacing between page elements.
 */
const VerticalSpace = styled.div`
  margin-top: ${fromTheme('ws', 'large')};
  margin-bottom: ${fromTheme('ws', 'large')};
`;

export default VerticalSpace;
