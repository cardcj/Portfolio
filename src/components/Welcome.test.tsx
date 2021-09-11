import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme';
import { WELCOME_TITLE, WELCOME_PARA } from '../constants/strings';

import Welcome from './Welcome';

it('checks that the Welcome component renders', () => {
  render(
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );

  const renderedTitle = screen.getByText(WELCOME_TITLE);
  const renderedPara = screen.getByText(WELCOME_PARA);
  const renderedWrapper = screen.getByTestId('welcomeWrapper');

  expect(renderedWrapper).toContainElement(renderedTitle);
  expect(renderedWrapper).toContainElement(renderedPara);
  expect([renderedPara, renderedTitle, renderedWrapper]).toBeVisible;
});
