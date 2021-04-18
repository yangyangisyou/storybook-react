import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
