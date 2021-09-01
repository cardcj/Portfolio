import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme';
import Header from './Header';

it('checks that the Header component renders', () => {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );

  const renderedHeader = screen.getByRole('navigation');
  const renderedButtons = screen.getAllByRole('button');

  expect(renderedHeader).toBeVisible();
  renderedButtons.forEach((button) => {
    expect(renderedHeader).toContainElement(button);
  });
  expect(renderedButtons.length).toEqual(4);
});
