import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.p`
  display: block;
  border-radius: 12px;
  background-color: white;
  width: ${({isTabletOrMobile}) => isTabletOrMobile ? '100%' : '400px'};
  padding: 30px;
  box-shadow: 0 10px 40px -10px #00000033;
`;

const ParagraphCard = ({ children, isTabletOrMobile }) => (
  <StyledWrapper isTabletOrMobile={ isTabletOrMobile }>
    <Paragraph>
      {
        children
      }
    </Paragraph>
  </StyledWrapper>
);

export default ParagraphCard;