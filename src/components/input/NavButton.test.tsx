import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../Theme';
import NavButton from './NavButton';

it('checks that a NavButton renders with the text passed to it present', () => {
  render(
    <ThemeProvider theme={theme}>
      <NavButton text="Test NavButton" />
    </ThemeProvider>
  );

  const renderedNavButton = screen.getByRole('button');

  expect(renderedNavButton).toHaveTextContent('Test NavButton');
});
