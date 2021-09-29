import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../Theme';
import Loader from './Loader';

it('checks that the Loader component renders', () => {
  render(
    <ThemeProvider theme={theme}>
      <Loader />
    </ThemeProvider>
  );

  const renderedLoader = screen.getByTestId('loader');

  expect(renderedLoader).toBeVisible();
});
