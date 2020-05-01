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

const cubicBezier = [0.16, 1, 0.3, 1];
const [a, b, c, d] = cubicBezier;

const theme = {
  greenLight: 'rgba(12, 242, 35, 0.2)',
  greenDense: 'rgba(106, 217, 123, 1)',
  greyDark: 'rgb(45, 45, 45)',
  greyLight: 'rgba(237, 237, 237, 1)',
  inactive: 'rgba(158, 158, 158, 1)',
  shadow: '0 10px 40px -10px #00000033',
  animation: slideIn,
  mobilePadding: '5vw',
  bezier: `cubic-bezier(${ a },${ b },${ c },${ d })`,
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
    hero: 'calc(4rem + 3.125vw)',
    heroMobile: 'calc(2.5rem + 3.125vw)',
    mobileSubtitle: '.5rem',
    mobileMenuHeading: 'calc(.7rem + 3.125vw)',
    mobileMenuButton: 'calc(.3rem + 3.125vw)',
    mobileFooterButton: '.8rem',
    plantDetails: 'calc(1.5rem + 3.125vw)',
    plantDetailsLongMobile: 'calc(.1rem + 3.125vw)',
    plantDetailsLong: 'calc(.1rem + 2.125vw)',
    heading: '6rem',
  },
};


export default theme;