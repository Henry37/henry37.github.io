import { styled } from 'styled-components';

export const Nav = styled.nav`
  width: fit-content;
  max-width: 400px;
  margin: 0 auto;
  background-color: #000000;
  overflow: hidden;
  display: flex;
  border: 1px solid var(--button-border-color);
  border-radius: 5px;
`;

export const NavLink = styled.a<{ selected: boolean }>`
  width: 60px;
  height: 20px;
  line-height: 20px;
  flex: 1;
  display: block;
  text-align: center;
  padding: 4px 6px;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
  color: ${({ selected }) => selected ? 'var(--button-text-color-selected)' : 'var(--button-text-color)'};
  background-color: ${({ selected }) => selected ? 'var(--button-background-color-selected)' : 'var(--button-background-color)' };

  &:hover {
    color: var(--button-text-color-hover);
    background-color: var(--button-background-color-hover);
  }
`;
