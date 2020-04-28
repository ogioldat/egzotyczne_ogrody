import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: block;
  border-radius: 12px;
  background-color: white;
  width: ${({isTabletOrMobile}) => isTabletOrMobile ? '100%' : '450px'};
  padding: 30px;
  box-shadow: 0 10px 40px -10px #00000033;
`;

const StyledP = styled(Paragraph)`
   font-size: ${({theme}) => theme.fontSize.m};
`;

const ParagraphCard = ({ children, isTabletOrMobile }) => (
  <StyledWrapper isTabletOrMobile={ isTabletOrMobile }>
    <StyledP>
      {
        children
      }
    </StyledP>
  </StyledWrapper>
);

ParagraphCard.propTypes = {
  children: PropTypes.string.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired
};

export default ParagraphCard;