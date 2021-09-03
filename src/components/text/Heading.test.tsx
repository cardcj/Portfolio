import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../Theme';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

import Heading from './Heading';

it('checks that a heading renders with the props correctly passed through', () => {
  render(
    <ThemeProvider theme={theme}>
      <Heading icon={faBullseye} iconTitle="Target icon" text="Test Heading" />
    </ThemeProvider>
  );

  const renderedHeading = screen.getByRole('heading');
  const renderedIcon = screen.getByTitle('Target icon').parentElement;

  expect(renderedHeading).toHaveTextContent('Test Heading');
  expect(renderedIcon).toBeVisible();
  expect(renderedIcon).toHaveAttribute('data-icon', 'bullseye');
});
