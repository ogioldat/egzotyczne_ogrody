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

  
  ${ ({ type, theme, isTabletOrMobile, longString }) => {
  switch (type) {
    default:
      return css`
           margin: 50px 0 10px 0;
           font-size: ${ isTabletOrMobile
           ? `calc(3.125vw + ${ theme.fontSize.l })` : theme.fontSize.heading };
           `;

    case 'menu':
      return css`
           font-size: ${ isTabletOrMobile ? theme.fontSize.mobileMenuHeading : theme.fontSize.xl };
           color: ${ ({ reversed }) => reversed && theme.greyLight };
           ${ ({ reversed }) => !reversed && css`
              ` }
           `;

    case 'plantDetails':
      return css`
           font-size: ${ (isTabletOrMobile && !longString)
        ? theme.fontSize.s : (longString && isTabletOrMobile )
          ? theme.fontSize.plantDetailsLongMobile : (longString && !isTabletOrMobile )
              ? theme.fontSize.plantDetailsLong : theme.fontSize.plantDetails }; 
           align-self: center;
           margin-bottom: 0;
           `;

    case 'subpage':
      return css`
           font-size: ${ isTabletOrMobile ? theme.fontSize.xxl : theme.fontSize.plantDetails }; 
           align-self: center;
           margin-bottom: 0;
           `;

    case 'small':
      return css`
          font-size: ${isTabletOrMobile ? theme.fontSize.xs : theme.fontSize.m };
          top: ${ ({ card }) => card && '80%' };
          margin-bottom: 10px;
          `;
  }
}
};
  font-size: ${ ({ footer, isTabletOrMobile, theme }) =>
  (footer && isTabletOrMobile) && theme.fontSize.xs } 
`;

const StyledRect = styled.div`
  position: absolute;
  bottom: 25%;
  left: 10%;
  z-index: -1;
  width: 100%;
  height: 80%;
  ${ ({ reversed, type, theme }) => !reversed && css`background-color: ${ ['menu', 'plantDetails', 'subpage'].some(el => el === type) ? theme.greenLight : theme.greyLight }` };
  box-shadow: ${ ({ theme }) => theme.shadow };
  animation: 1.5s forwards ${ ({ theme }) => theme.bezier } ${ ({ theme }) => theme.animation };
`;

const Heading = ({ children, type, reversed, card, isTabletOrMobile, footer }) => (
  <StyledHeading
    longString={typeof children === 'string' && children.length > 15}
    footer={ footer }
    isTabletOrMobile={ isTabletOrMobile }
    type={ type }
    reversed={ reversed }
    card={ card }>
    <StyledRect  type={ type } reversed={ reversed }/>
    {
      children
    }
  </StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  reversed: PropTypes.bool,
  card: PropTypes.bool,
  isTabletOrMobile: PropTypes.bool.isRequired,
  footer: PropTypes.bool,
};

Heading.defaultProps = {
  children: null,
  type: '',
  reversed: false,
  card: false,
  footer: false,
};

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(Heading);


