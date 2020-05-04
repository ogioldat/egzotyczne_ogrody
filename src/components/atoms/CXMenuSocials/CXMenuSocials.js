import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fb from 'assets/icons/fb.png';
import messenger from 'assets/icons/messenger.png';
import mail from 'assets/icons/mail.png';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 2vh;
  left: 0;
  right: 0;
  flex-direction: row;
  z-index: 1;
  align-items: center;
`;

const StyledLine = styled.div`
   width: 5vw;
   height: 4px;
   background-color: ${ ({ theme }) => theme.inactive };
   margin: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '10px' : '20px' };
`;

const StyledIcon = styled.img`
  margin: 0 15px;
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '20px' : '35px' };
  height: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '20px' : '35px' };
  cursor:pointer;
  opacity: .6;
  transition: .3s ease opacity;
  
  &:hover { opacity: 1}
`;

const CXMenuSocials = ({ isTabletOrMobile, lines = true }) => (
  <StyledWrapper>
    {
      (!isTabletOrMobile && lines) && <StyledLine/>
    }
    <div>
      <a href="https://www.facebook.com/piotrogiolda/">
        <StyledIcon
          isTabletOrMobile={ isTabletOrMobile }
          src={ fb }
          alt='fb'/>
      </a>
      <a href="google.com">
        <StyledIcon
          isTabletOrMobile={ isTabletOrMobile }
          src={ messenger }
          alt='ig'/>
      </a>
      <a href="google.com">
        <StyledIcon
          isTabletOrMobile={ isTabletOrMobile }
          src={ mail }
          alt='mail'/>
      </a>
    </div>
    {
      (!isTabletOrMobile && lines) && <StyledLine/>
    }
  </StyledWrapper>
);

CXMenuSocials.propTypes = {
  lines: PropTypes.bool,
  isTabletOrMobile: PropTypes.bool.isRequired
};

CXMenuSocials.defaultProps = {
  lines: true
};

export default CXMenuSocials;