import React from 'react';

import ColLayout, { ColLayoutProps } from './ColLayout';

export default {
  component: ColLayout,
  title: 'Containers/ColLayout',
};

const Template = (args: ColLayoutProps) => (
  <ColLayout {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </ColLayout>
);

export const Default = Template.bind({});
Default.args = {
  numColumns: 3,
};
