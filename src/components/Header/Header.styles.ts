import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  background-color: var(--header-background-color);
`;

export const Logo = styled.div`
  background: transparent;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
`;
