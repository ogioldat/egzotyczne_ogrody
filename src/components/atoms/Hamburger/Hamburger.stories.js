import React from 'react';
import {storiesOf} from '@storybook/react';
import Hamburger from './Hamburger';

storiesOf("atoms/Hamburger", module)
  .add('Hamburger', () => <Hamburger/>);