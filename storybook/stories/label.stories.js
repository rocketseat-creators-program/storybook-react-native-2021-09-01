import React from 'react';

import {storiesOf} from '@storybook/react-native';
import {text, optionsKnob, select, boolean} from '@storybook/addon-knobs';

import theme from '../../src/config/theme';
import Container from '../decorators/container';
import {Label} from '../../src/components';

storiesOf('Componets/Label')
  .addDecorator(Container)
  .addParameters({
    component: Label,
    backgrounds: [
      {name: 'light', value: theme.colors.light, default: true},
      {name: 'dark', value: theme.colors.dark},
    ],
  })
  .add(
    'Title',
    () => (
      <Label
        color={optionsKnob(
          'Title Theme',
          {
            Primary: 'primary',
            Secondary: 'secondary',
            Muted: 'muted',
            Light: 'light',
            Dark: 'dark',
          },
          'primary',
          {
            display: 'inline-radio',
          },
        )}
        bold={boolean('Title Bold', true)}
        size={select(
          'Title Size',
          {
            Large: 'large',
            Medium: 'medium',
          },
          'large',
        )}>
        {text('Contet', 'Experts Club')}
      </Label>
    ),
    {
      notes: 'Use esse componente sempre que precisar de um título',
    },
  )
  .add(
    'Text',
    () => (
      <Label
        color={optionsKnob(
          'Text Theme',
          {
            Primary: 'primary',
            Secondary: 'secondary',
            Muted: 'muted',
            Light: 'light',
            Dark: 'dark',
          },
          'muted',
          {
            display: 'inline-radio',
          },
        )}
        size="small"
        bold={boolean('Title Bold', true)}>
        {text('Title Text', 'My Label')}
      </Label>
    ),
    {
      notes: 'Use esse componente sempre que precisar de um Titulo.',
    },
  );
