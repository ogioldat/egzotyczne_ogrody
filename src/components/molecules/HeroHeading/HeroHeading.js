import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const StyledWrapper = styled.div`
    line-height: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '1vw' : '50px' };
    display: inline-flex;
    flex-direction: column;  
`;

const StyledHeroHeading = styled.h1`
  text-transform: capitalize;
  display: inline-block;
  position: relative;
  font-size: ${ ({ theme, isTabletOrMobile }) => isTabletOrMobile
  ? `calc(${ theme.fontSize.heroMobile } + 3.125vw)` : theme.fontSize.hero };
  font-weight: ${ ({ theme }) => theme.bold };
`;

const StyledRect = styled.div`
  position: absolute;
  width: ${ ({ len }) => `${ len * 10 }%` };
  height: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '12vh' : '130px' };
  bottom: -20px;
  box-shadow: ${ ({ theme }) => theme.shadow };
  z-index: -1;
  left: 2vw;
  background: ${ ({ theme }) => theme.greyLight };
  animation: 1.5s .3s forwards ${ ({ theme }) => theme.bezier } ${ ({ theme }) => theme.animation };
`;

const HeroHeading = ({ children, isTabletOrMobile }) => (
  <StyledWrapper isTabletOrMobile={ isTabletOrMobile }>
    {
      children
        // eslint-disable-next-line react/prop-types
        .split(' ')
        .map(word =>
          <StyledHeroHeading isTabletOrMobile={ isTabletOrMobile } key={ uniqid() }>
            <StyledRect len={ word.length } isTabletOrMobile={ isTabletOrMobile }/>
            {
              word
            }
          </StyledHeroHeading>)
    }
  </StyledWrapper>
);

HeroHeading.propTypes = {
  children: PropTypes.string.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
};

export default HeroHeading;


