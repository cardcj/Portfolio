import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme';
import Navbar from './Navbar';

it('checks that the Navbar component renders', () => {
  render(
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );

  const renderedNavbar = screen.getByRole('navigation');
  const renderedButtons = screen.getAllByRole('button');

  expect(renderedNavbar).toBeVisible();
  renderedButtons.forEach((button) => {
    expect(renderedNavbar).toContainElement(button);
  });
  expect(renderedButtons.length).toEqual(4);
});
