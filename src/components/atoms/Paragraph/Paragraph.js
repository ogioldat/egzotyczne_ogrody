import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({theme}) => theme.fontSize.s};
  text-align: justify;
  margin: 0;
`;

export default Paragraph