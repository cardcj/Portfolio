import React from 'react';

import NavButton, { NavButtonProps } from './NavButton';

export default {
  component: NavButton,
  title: 'Input/NavButton',
};

const Template = (args: NavButtonProps) => <NavButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Navigation',
};
