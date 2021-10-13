import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme';
import Footer from './Footer';

it('checks that the Footer component renders', () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );

  const renderedFooter = screen.getByRole('contentinfo');

  expect(renderedFooter).toBeVisible();
});
