import React from 'react';
import {storiesOf} from '@storybook/react';
import Subtitle from './Subtitle';

storiesOf('atoms/Subtitle', module)
  .add('Subtitle', () => <Subtitle>
    Musa Grande Nain jest znany również
    jako banan Chiquita, gdyż jest
    głównym produktem firmy Chiquita
  </Subtitle>);