import { styled } from 'styled-components';

/**
 * A wrapper component to horizontally center content on the page
*/
const CenterContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    display: block;
    }
`;

export default CenterContainer;
