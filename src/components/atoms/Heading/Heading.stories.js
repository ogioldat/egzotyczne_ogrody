import React from 'react';
import {storiesOf} from '@storybook/react';
import Heading from 'components/atoms/Heading/Heading';

storiesOf('atoms/Heading', module)
  .add('Menu Heading', () => <Heading type='menu'>Hello there!</Heading> )
  .add('Heading', () => <Heading>Hello there!</Heading> )
  .add('SmallHeading', () => <Heading type='small'>Small Heading</Heading> )
  .add('PlantDetails', () => <Heading type='plantDetails'>Plant Details</Heading> );