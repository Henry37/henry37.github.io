'use client';
import React, { useState } from 'react';
import { Nav, NavLink } from './Navigator.styles';

const Navigator: React.FC = () => {
  const [selected, setSelected] = useState<string>('./');

  return (
    <Nav>
      <NavLink href="./" selected={selected === './'} onClick={() => setSelected('./')}>
        Home
      </NavLink>
      <NavLink href="./services" selected={selected === '#tech'} onClick={() => setSelected('#tech')}>
        Tech stack
      </NavLink>
      <NavLink href="./services" selected={selected === '#career'} onClick={() => setSelected('#tech')}>
        Career
      </NavLink>
      <NavLink href="./services" selected={selected === '#projects'} onClick={() => setSelected('#tech')}>
        Projects
      </NavLink>
      <NavLink href="./contact" selected={selected === '#contact'} onClick={() => setSelected('#contact')}>
        Contact
      </NavLink>
    </Nav>
  );
};

export default Navigator;
