import React from 'react';

import Paragraph, { ParagraphProps } from './Paragraph';

export default {
  component: Paragraph,
  title: 'text/Paragraph',
};

const Template = (args: ParagraphProps) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a paragraph element that is styled using styled-components',
};
