import React from 'react';
import styled from 'styled-components';
import fb from 'assets/icons/fb.png'
import messenger from 'assets/icons/messenger.png'
import mail from 'assets/icons/mail.png'

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  z-index: 10222;
  align-items: center;
`;

const StyledLine = styled.div`
   width: 5vw;
   height: 4px;
   background-color: ${({theme}) => theme.inactive};
   margin: 0 20px;
`;

const StyledIcon = styled.img`
  margin: 0 15px;
  width: 35px;
  height: 35px;
  cursor:pointer;
  opacity: .6;
  transition: .3s ease opacity;
  
  &:hover { opacity: 1}
`;

const CXMenuSocials = () => (
  <StyledWrapper>
    <StyledLine/>
    <div>
        <a href="https://www.facebook.com/piotrogiolda/"><StyledIcon src={fb} alt='fb'/></a>
        <a href="google.com"><StyledIcon src={messenger} alt='ig'/></a>
        <a href="google.com"><StyledIcon src={mail} alt='mail'/></a>
    </div>
    <StyledLine/>
  </StyledWrapper>
);

export default CXMenuSocials