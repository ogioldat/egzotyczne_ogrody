import React from 'react';
import {storiesOf} from '@storybook/react';
import MenuBlock from './MenuBlock';
import { routes } from '../../../routes';

const content = [
  {label:'tel', link: routes.gallery}
];

storiesOf('molecules/MenuBlock', module)
  .add('MenuBlock', () => <MenuBlock title='kontakt' content={content}/>)