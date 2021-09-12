import React from 'react';
import { render, screen } from '@testing-library/react';

import ColLayout from './ColLayout';

it('checks that the ColLayout component renders', () => {
  render(
    <ColLayout numColumns={3}>
      <p data-testid="paragraph">1</p>
      <p data-testid="paragraph">2</p>
      <p data-testid="paragraph">3</p>
    </ColLayout>
  );

  const renderedContainer = screen.getByTestId('colLayout');
  const renderedChildren = screen.getAllByTestId('paragraph');

  renderedChildren.forEach((element) => {
    expect(renderedContainer).toContainElement(element);
  });
  expect(renderedContainer).toHaveStyle({
    display: 'inline-grid',
    'grid-template-columns': 'repeat(3,1fr)',
  });
});
