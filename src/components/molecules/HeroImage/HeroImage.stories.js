import React from 'react';
import {storiesOf} from '@storybook/react';
import HeroImage from './HeroImage';

storiesOf("organisms/HeroImage", module)
  .add("HeroImage", () => <HeroImage/>)