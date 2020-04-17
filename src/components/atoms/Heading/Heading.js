import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';

const StyledHeading = styled.h1`
  position: relative;
  display: inline-block;
  text-transform: lowercase;
  z-index: 2;
  font-weight: ${ ({ theme }) => theme.bold };
  margin: 0;
  
  ${ ({ type, theme, isTabletOrMobile, footer }) => {
  switch (type) {
    default:
      return css`

           margin: 100px 0 50px 0;
           font-size: ${ isTabletOrMobile
        ? `calc(3.125vw + ${ theme.fontSize.xl })` : theme.fontSize.heading };
           
           div {
              background-color: ${ theme.greyLight };
           }
           `;

    case 'menu':
      return css`
           font-size: ${ isTabletOrMobile ? theme.fontSize.mobileMenuHeading : theme.fontSize.xl };
           color: ${ ({ reversed }) => reversed && theme.greyLight };
           ${ ({ reversed }) => !reversed && css`
                  div {
                    background-color: ${ theme.greenLight };
                  }
              ` }
           `;

    case 'plantDetails':
      return css`
           font-size: ${ isTabletOrMobile ? theme.fontSize.xl : theme.fontSize.plantDetails }; 
           align-self: center;
           margin-bottom: 0;
           
           div {
            background-color: ${ theme.greenLight };
           }
           `;

    case 'small':
      return css`
          font-size: ${ theme.fontSize.m };
          top: ${ ({ card }) => card && '80%' };
          margin-bottom: 10px;
          
          div {
            background-color: ${ theme.greyLight };
          }
          `;
  }
}
};
  font-size: ${ ({ footer, isTabletOrMobile, theme }) => 
  (footer && isTabletOrMobile) &&  theme.fontSize.s   } 
`;

const StyledRect = styled.div`
  position: absolute;
  bottom: 25%;
  left: 10%;
  z-index: -1;
  width: 100%;
  height: 80%;
  animation: 1.5s forwards ${ ({ theme }) => theme.bezier } ${ ({ theme }) => theme.animation };
`;

const Heading = ({ children, type, reversed, card, isTabletOrMobile, footer }) => (
  <StyledHeading
    footer={ footer }
    isTabletOrMobile={ isTabletOrMobile }
    type={ type }
    reversed={ reversed }
    card={ card }>
    <StyledRect/>
    {
      children
    }
  </StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Heading.defaultProps = {
  type: '',
};

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(Heading);


