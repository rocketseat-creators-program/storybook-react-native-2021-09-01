import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {text, boolean} from '@storybook/addon-knobs';
import theme from '../../src/config/theme';
import Container from '../decorators/container';
import Cover from '../../src/components/Cover';

storiesOf('Components/Cover')
  .addDecorator(Container)
  .addParameters({
    component: Cover,
    backgrounds: [
      {name: 'light', value: theme.colors.light, default: true},
      {name: 'dark', value: theme.colors.dark},
    ],
  })
  .add(
    'Default',
    () => (
      <Cover
        rounded={boolean('Border Rounded', true)}
        loading={boolean('Loading State', true)}
        image={text(
          'Image',
          'http://d33x644h9xoqir.cloudfront.net/wp-content/uploads/sites/2/2018/08/shridhar-gupta-678685-unsplash-1-745x400.jpg',
        )}
      />
    ),
    {
      notes: 'Use esse componente sempre que precisar de uma cover',
    },
  );
