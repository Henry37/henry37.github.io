import React from 'react';
import { render } from '@testing-library/react';
import Home from './page';

describe('Page', () => {
  it('should render', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Welcome')).toBeInTheDocument();
  });
});