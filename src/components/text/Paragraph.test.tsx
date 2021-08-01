import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../Theme';

import Paragraph from './Paragraph';

it('checks that a Paragraph renders with the props correctly passed through', () => {
  const testText = 'Test Paragraph';
  render(
    <ThemeProvider theme={theme}>
      <Paragraph text={testText} />
    </ThemeProvider>
  );

  const renderedParagraph = screen.getByText(testText);

  expect(renderedParagraph).toBeVisible();
});
