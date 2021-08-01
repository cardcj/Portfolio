import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

it('checks that the Loader component renders', () => {
  render(<Loader />);

  const renderedLoader = screen.getByTestId('loader');

  expect(renderedLoader).toBeVisible();
});
