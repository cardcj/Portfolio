import React from 'react';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme';

import ImageCard from './ImageCard';

const testingText = 'This is my card';
const testingAlt = 'Testing Photo';

it('checks that ImageCard renders correctly', () => {
  render(
    <ThemeProvider theme={theme}>
      <ImageCard
        cardBodyText={testingText}
        imageSrc="https://picsum.photos/id/155/80/80"
        altText={testingAlt}
      />
    </ThemeProvider>
  );

  const renderedCard = screen.getByRole('article');
  const renderedBodyText = screen.getByText(testingText);
  const renderedImg = screen.getByRole('img');

  expect(renderedCard).toContainElement(renderedBodyText);
  expect(renderedCard).toContainElement(renderedImg);
  expect(renderedImg).toHaveAttribute('alt', testingAlt);
});
