import React from 'react';

import {storiesOf} from '@storybook/react-native';
import {text, boolean, number} from '@storybook/addon-knobs';

import Container from '../decorators/container';
import PlaceCard from '../../src/components/PlaceCard';

import theme from '../../src/config/theme';

storiesOf('Components/PlaceCard')
  .addDecorator(Container)
  .addParameters({
    component: PlaceCard,
    backgrounds: [
      {name: 'muted', value: theme.colors.muted50, default: true},
      {name: 'light', value: theme.colors.light},
    ],
  })
  .add(
    'Default',
    () => (
      <PlaceCard
        loading={boolean('Loading State', false)}
        image={text(
          'Cover',
          'http://d33x644h9xoqir.cloudfront.net/wp-content/uploads/sites/2/2018/08/shridhar-gupta-678685-unsplash-1-745x400.jpg',
        )}
        title={text('Card Title', 'Co-working Test')}
        description={text('Card Description', 'Av. Test, 90')}
        amount={number('Amount', 10)}
      />
    ),
    {
      notes: 'Use esse componente sempre que precisarlistar um espaço.',
    },
  );
