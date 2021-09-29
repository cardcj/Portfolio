import React from 'react';

import ImageCard, { ImageCardProps } from './ImageCard';

export default {
  component: ImageCard,
  title: 'Containers/ImageCard',
};

const Template = (args: ImageCardProps) => <ImageCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardBodyText: "Hello, I'm a card component",
  imageSrc: 'https://picsum.photos/id/155/80/80',
  altText: 'Placeholder image',
};
