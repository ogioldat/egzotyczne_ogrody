import { transition } from '../assets/motion';
import { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-40%) scaleX(0);
    opacity: 0;
  }
  to {
    transform: translateX(15px) scaleX(1);
    opacity: 1;
  }
`;

const theme = {
  greenLight: 'rgba(12, 242, 35, 0.2)',
  greenDense: 'rgba(106, 217, 123, 1)',
  greyDark: 'rgb(45, 45, 45)',
  greyLight: 'rgba(237, 237, 237, 1)',
  inactive: 'rgba(158, 158, 158, 1)',
  shadow: '0 10px 40px -10px #00000033',
  animation: slideIn,
  light: 300,
  bold: 700,
  fontSize: {
    xxs: '1rem',
    xs: '1.2rem',
    s: '1.6rem',
    m: '2.1rem',
    l: '2.4rem',
    xl: '2.8rem',
    xxl: '4rem',
    hero: '10rem',
    plantDetails: '8rem',
    heading: '6rem'
  }
};


export default theme;