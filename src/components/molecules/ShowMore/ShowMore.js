import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: white;
`;

const ShowMore = ({ text }) => (
  <StyledWrapper>
    <Paragraph>
      {
        text
      }
    </Paragraph>
  </StyledWrapper>
);

export default ShowMore;

