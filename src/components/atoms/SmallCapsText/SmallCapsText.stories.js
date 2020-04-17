import React from 'react';
import {storiesOf} from '@storybook/react';
import SmallCapsText from 'components/atoms/SmallCapsText/SmallCapsText';

const text = 'bananowce'

storiesOf('atoms/SmallCapsText', module)
  .add('SmallCapsText', () => <SmallCapsText>{text}</SmallCapsText>);