'use client';

import React from 'react';
import { FooterContainer, CopyrightText } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <CopyrightText>© {new Date().getFullYear()} Henry. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
