import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme';
import Footer from './Footer';

it('checks that the Header component renders', () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );

  const renderedFooter = screen.getByRole('contentinfo');
  const renderedButtons = screen.getAllByRole('button');

  expect(renderedFooter).toBeVisible();
  renderedButtons.forEach((button) => {
    expect(renderedFooter).toContainElement(button);
  });
  expect(renderedButtons.length).toBe(4);
});
