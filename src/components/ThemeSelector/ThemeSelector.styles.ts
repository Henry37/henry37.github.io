import { styled } from 'styled-components';

export const ThemeSelectorContainer = styled.div`
  height: 20px;
  overflow: hidden;
  border-radius: 5px;
  background: transparent;
`;

export const ThemeSelectorButton = styled.button<{ selected: boolean }>`
  height: 20px;
  font-size: 10px;
  background-color: ${({ selected }) => (selected ? 'var(--button-background-color-selected)' : 'var(--button-background-color)')};
  color: ${({ selected }) => (selected ? 'var(--button-text-color-selected)' : 'var(--button-text-color)')};
  border: var(--button-border-color);
  cursor: pointer;
  vertical-align: top;
`;
