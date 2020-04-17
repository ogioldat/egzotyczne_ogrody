import React from 'react';
import {storiesOf} from '@storybook/react';
import ParagraphCard from './ParagraphCard';

const text = 'asaskjldlaksdjlkasjdlkasjdl as;lkdjlak da;klsjalks jdasd kljasdl;kasl; ' +
  'alksjd aslkdj asdlkjasdlk jask lda lsk;djaslk;d jasd lk' +
  'aslkd klasdkjl;as jkdla;ksd j;klas d;klja s' +
  'asdkl;ja;s kdj;lk asd'

storiesOf('atoms/ParagraphCard', module)
  .add('ParagraphCard', () => <ParagraphCard>{text}</ParagraphCard>)