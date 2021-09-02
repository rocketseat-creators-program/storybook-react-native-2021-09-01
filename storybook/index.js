// if you use expo remove this line
import React from 'react';
import {AppRegistry} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';

import './rn-addons';

import Home from '../src/pages/Home';

// enables knobs and backgrounds for all stories
addDecorator(withKnobs);
addDecorator(withBackgrounds);

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  port: 7007,
  onDeviceUI: true,
  asyncStorage: AsyncStorage,
});

const StoryBookRoot = () => {
  return <StorybookUIRoot />;
};

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default console.tron.storybookSwitcher(StoryBookRoot)(Home);
