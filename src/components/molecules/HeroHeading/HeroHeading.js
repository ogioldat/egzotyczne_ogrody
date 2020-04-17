import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const StyledWrapper = styled.div`
    line-height: 50px;
    display: inline-flex;
    flex-direction: column;
`;

const StyledHeroHeading = styled.h1`
  text-transform: capitalize;
  display: inline-block;
  position: relative;
  font-size: ${ ({ theme }) => theme.fontSize.hero };
  font-weight: ${ ({ theme }) => theme.bold };
`;

const StyledRect = styled.div`
  position: absolute;
  width: ${ ({ len }) => `${ len * 10 }%` };
  height: 130px;
  bottom: -20px;
  z-index: -1;
  left: 60px;
  background: ${ ({ theme }) => theme.greyLight };
  animation: 1.5s .3s forwards cubic-bezier(0.16, 1, 0.3, 1) ${  ({theme}) => theme.animation  };
`;

const HeroHeading = ({ children }) => (
  <StyledWrapper>
    {
      children
        // eslint-disable-next-line react/prop-types
        .split(' ')
        .map(word =>
          <StyledHeroHeading key={ uniqid() }>
            <StyledRect len={ word.length }/>
            {
              word
            }
          </StyledHeroHeading>)
    }
  </StyledWrapper>
);

HeroHeading.propTypes = {
  children: PropTypes.string,
};

HeroHeading.defaultProps = {
  children: '',
};


export default HeroHeading;


