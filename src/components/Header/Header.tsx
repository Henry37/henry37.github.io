'use client';
import React from 'react';
import Image from 'next/image';
import { HeaderContainer, HeaderWrapper, Logo } from './Header.styles';
import { ThemeSelector } from '../ThemeSelector/ThemeSelector';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo>
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        </Logo>
        <ThemeSelector />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
