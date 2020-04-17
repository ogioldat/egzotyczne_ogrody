import React from 'react';
import {storiesOf} from '@storybook/react';
import HeroHeading from 'components/molecules/HeroHeading/HeroHeading';

storiesOf('molecules/HeroHeading', module)
  .add('HeroHeading', () => <HeroHeading>Egzotyczne Ogrody</HeroHeading> );