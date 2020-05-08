import React from 'react';
import {storiesOf} from '@storybook/react';
import PlantCard from './PlantCard';


storiesOf('molecules/PlantCard', module)
  .add('PlantCard', () => <PlantCard title={'PHYLLOSTACHYS  AURESULCATA'}/>);