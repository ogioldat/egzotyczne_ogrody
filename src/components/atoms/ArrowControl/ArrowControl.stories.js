import React from 'react';
import {storiesOf} from '@storybook/react';
import ArrowControl from './ArrowControl';

storiesOf('atoms/ArrowControl', module)
  .add('ArrowControlLeft', () => <ArrowControl direction='left'/>)
  .add('ArrowControlRight', () => <ArrowControl direction='right'/>)