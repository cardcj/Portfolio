import React from 'react';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

import Heading, { HeadingProps } from './Heading';

export default {
  component: Heading,
  title: 'text/Heading',
};

const Template = (args: HeadingProps) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = { icon: faBullseye, iconTitle: 'Target icon', text: 'Heading' };
