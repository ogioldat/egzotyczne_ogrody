import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.h1`
  position: relative;
  display: inline-block;
  text-transform: lowercase;
  z-index: 2;
  font-weight: ${ ({ theme }) => theme.bold };
  margin: 0;
  
  ${ ({ type, theme }) => {
  switch (type) {
    default:
      return css`
           margin: 100px 0 0 0;
           font-size: ${ theme.fontSize.heading };
           
           div {
              background-color: ${ theme.greyLight };
           }
           `;

    case 'menu':
      return css`
           font-size: ${ theme.fontSize.xl }; 
           color: ${ ({ reversed }) => reversed && theme.greyLight };
           ${ ({ reversed }) => !reversed && css`
                  div {
                    background-color: ${ theme.greenLight };
                  }
              ` }
           `;

    case 'plantDetails':
      return css`
           font-size: ${ theme.fontSize.plantDetails }; 
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
}
`;

const StyledRect = styled.div`
  position: absolute;
  bottom: 25%;
  left: 10%;
  z-index: -1;
  width: 100%;
  height: 80%;
  animation: 1.5s forwards cubic-bezier(0.16, 1, 0.3, 1) ${ ({theme}) => theme.animation };
`;

const Heading = ({ children, type, reversed, card }) => (
  <StyledHeading type={ type } reversed={ reversed } card={ card }>
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

export default Heading;


