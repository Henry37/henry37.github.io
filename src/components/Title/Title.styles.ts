
import { Theme } from '../../interfaces/Theme';
import { styled } from 'styled-components';

export const StyledTitle = styled.h1<{ theme: Theme }>`
  padding: 20px;
  font-size: 30px;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;
