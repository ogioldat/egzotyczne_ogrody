import styled from 'styled-components';
import { motion } from 'framer-motion';

const SmallCapsText = styled(motion.h2)`
  font-size: ${ ({ theme }) => theme.fontSize.m };
  text-align: justify;
  font-variant: small-caps;
  font-weight: lighter;
  margin: 0;
`;

export default SmallCapsText;