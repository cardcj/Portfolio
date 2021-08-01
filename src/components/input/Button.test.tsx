import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../Theme';
import Button from './Button';

it('checks that a button renders with the text passed to it present', () => {
  render(
    <ThemeProvider theme={theme}>
      <Button variant="primary" text="This is a test button" />
    </ThemeProvider>
  );

  const renderedButton = screen.getByRole('button');

  expect(renderedButton).toHaveTextContent('This is a test button');
});
