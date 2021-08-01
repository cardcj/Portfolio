import * as React from 'react';

import Loader from './Loader';

export default {
  component: Loader,
  title: 'Loader',
};

const Template = () => <Loader />;

export const Default = Template.bind({});
Default.args = {};
