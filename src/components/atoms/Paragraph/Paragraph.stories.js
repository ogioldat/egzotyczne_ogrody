import React from 'react';
import {storiesOf} from '@storybook/react';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const text = 'Jesteśmy małą, rodzinną firmą.\n' +
  ' Od piętnastu lat zajmujemy się uprawą roślin.\n' +
  'Stale wzbogacamy asortyment i poszukujemy nowych,\n' +
  'ciekawych gatunków roślin, które mogą cieszyć oko\n' +
  'pasjonatów egzotyki lub zaszczepić\n' +
  'tę pasję.'

storiesOf('atoms/Paragraph', module)
  .add('Paragraph', () => <Paragraph>{text}</Paragraph>)