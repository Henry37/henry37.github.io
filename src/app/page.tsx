'use client'

import { FC } from 'react';
import Title from '../components/Title/Title';
import Navigator from '../components/Navigator/Navigator';

const Home: FC = () => {
  return (
    <div>
      <Title>Welcome to visit Henry</Title>
      <Navigator />
    </div>
  );
};

export default Home;
