import React from 'react';
import Image from 'next/image';
import { BookshelfContainer, BooksContainer, Book } from './BookShelf.styles';

interface Book {
  id: number;
  title: string;
  cover: string;
}

interface BookShelfProps {
  books: Book[];
  activeIndex?: number;
}

const BookShelf: React.FC<BookShelfProps> = ({ books, activeIndex = 3 }) => {
  const [currentIndex, setCurrentIndex] = React.useState(activeIndex);

  const handleBookClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault();
  };

  return (
    <BookshelfContainer>
      <BooksContainer>
        {books.map((book, index) => {
          const isActive = currentIndex === index ? 'active' : '';
          const width = isActive ? 200 : 100;
          const height = isActive ? 360 : 180;
          return (
            <Book
              key={book.id}
              active={isActive}
              onClick={() => {
                handleBookClick(index);
              }}
              onDragStart={handleDragStart}
            >
              <Image
                src={book.cover}
                alt={book.title}
                width={width}
                height={height}
              />
            </Book>
          );
        })}
      </BooksContainer>
    </BookshelfContainer>
  );
};

export default BookShelf;
