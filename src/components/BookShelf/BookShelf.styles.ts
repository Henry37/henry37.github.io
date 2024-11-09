import { styled } from 'styled-components';

export const BookshelfContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto 60px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const BooksContainer = styled.div`
  height: 360px;
  display: flex;
  gap: 20px;
  margin-top: 20px;
  overflow-x: auto;
  padding: 20px;
  border-radius: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  align-items: end;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Book = styled.div<{ active: string }>`
  width: ${({ active }) => (active === 'active' ? '200px' : '100px')};
  height: ${({ active }) => (active === 'active' ? '360px' : '180px')};
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px var(--shadow-color);
  cursor: pointer;
  transition: width 0.3s, height 0.3s;
`;
