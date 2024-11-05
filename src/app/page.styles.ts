import styled from 'styled-components';

export const Section = styled.div`
  height: 100vh;
  transition: opacity 1s;

  &.fade-in {
    opacity: 1;
  }

  &.fade-out {
    opacity: 0;
  }
`;