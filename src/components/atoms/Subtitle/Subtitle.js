import styled from 'styled-components';

const Subtitle = styled.h2`
  font-weight: bolder;
  margin: 0 0 20px 0;
  font-size: ${ ({ theme }) => theme.fontSize.m };
  text-transform: uppercase;
  text-align: justify;
  font-variant: small-caps;
`;

export default Subtitle;