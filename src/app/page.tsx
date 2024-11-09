'use client'

import { FC } from 'react';
import Title from '../components/Title/Title';
import Navigator from '../components/Navigator/Navigator';
import BookShelf from '../components/BookShelf/BookShelf';
import { Page } from './page.styles';
import { books } from '../constants/books';

const Home: FC = () => {
  return (
    <Page>
      <Title>Welcome to visit Henry</Title>
      <Navigator />
      <BookShelf books={books} />
    </Page>
  );
};

export default Home;
