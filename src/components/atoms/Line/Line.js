import styled from 'styled-components';

const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: ${ ({ theme }) => theme.greyLight };
`;

export default Line;