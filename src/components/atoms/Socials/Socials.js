import React from 'react';
import styled from 'styled-components';
import fb from 'assets/icons/fb.png'
import messenger from 'assets/icons/messenger.png'
import mail from 'assets/icons/mail.png'


const StyledWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  left: 20px;
  top: 50%; 
  transform: translate(0,-50%);
  background-color: #cefcd3;
  border-radius: 12px;
  width: 80px;
`;

const StyledHref = styled.a`
  text-align: center;
  font-weight: ${ ({ theme }) => theme.bold };
  font-size: ${ ({ theme }) => theme.fontSize.l };
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin: 0;
  width: 80px;
  height: 80px;
  transition: .3s transform ease;
  
  &:hover {
    transform: scale(1.1);
    cursor:pointer;
  }
`;

const StyledIcon = styled.img`
  width: 50px;
`;

const Socials = () => (
  <StyledWrapper>
    <StyledHref href='https://www.facebook.com/piotrogiolda/'>
      <StyledIcon src={fb} alt=""/>
    </StyledHref>
    <StyledHref href='mailto:biuro@egzotyczneogrody.pl'>
      <StyledIcon src={mail} alt=""/>
    </StyledHref>
    <StyledHref href='https://m.me/piotrogiolda'>
      <StyledIcon src={messenger} alt=""/>
    </StyledHref>
  </StyledWrapper>
);


export default Socials;


