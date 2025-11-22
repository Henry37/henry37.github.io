'use client'

import React, { FC, useEffect } from 'react';
import Title from '../components/Title/Title';
import { Page } from './page.styles';
import { Spin } from 'antd';

const Home: FC = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://3mk112lv0534.vicp.fun';
    }, 1200);
  }, []);

  return (
    <Page style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Title>Welcome to visit Henry, redirecting </Title>
        <Spin size="large" />
      </div>
    </Page>
  );
};

export default Home;
