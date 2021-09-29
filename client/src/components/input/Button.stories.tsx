import React from 'react';

import Button, { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Input/Button',
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'tertiary', 'faded'],
      },
    },
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Button',
  variant: 'primary',
};
