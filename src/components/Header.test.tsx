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
  const renderedAppName = screen.getByText('FocusQA');
  const renderedButton = screen.getByRole('button');

  expect(renderedHeader).toBeVisible();
  expect(renderedHeader).toContainElement(renderedAppName);
  expect(renderedHeader).toContainElement(renderedButton);
});
