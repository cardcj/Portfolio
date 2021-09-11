import React from 'react';

import Welcome from './Welcome';

export default {
  component: Welcome,
  title: 'Welcome',
};

const Template = () => <Welcome />;

export const Default = Template.bind({});
Default.args = {};
