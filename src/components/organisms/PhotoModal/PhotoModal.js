import React from 'react';
import styled from 'styled-components';
import arrow from 'assets/icons/arrow_icon.png';
import ArrowControl from 'components/atoms/ArrowControl/ArrowControl';
import close from 'assets/icons/close.png';

const StyledWrapper = styled.div`
  position: fixed !important;
  z-index: 2000;
  background: rgba(0,0,0,0.7);
  margin: auto;
  padding: 3% 0;
  width: 100%;
  top: 50%; 
  left: 50%;
  transform: translate(-50%,-50%);
  
  border-radius: .3rem;
  box-shadow: 0 10px 40px -10px #00000033;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  animation: animate-modal .7s ease;
  transform-origin: center;
  
  
  @keyframes animate-modal{
    from {
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
`;

const StyledImage = styled.img`
  height: 90vh;
`;

const StyledX = styled.img`
  color: white;
  position: absolute;
  width: 32px;
  top: 50px;
  padding: 5px;
  box-sizing: content-box;
  cursor:pointer;
  right: 50px;
  transition: transform .5s ${ ({ theme }) => theme.bezier },
    opacity .5s ${ ({ theme }) => theme.bezier };
  
  &:hover {
    opacity: .6;
    transform: scale(.9);
  }
`;

const StyledPrevArrow = styled(ArrowControl)`
  position: absolute;
  left: 50px;
`;

const StyledPrevNext = styled(ArrowControl)`
  position: absolute;
  right: 50px;
`;


const PhotoModal = ({ currentPhoto, changePhoto, toggleModal }) => (
  <StyledWrapper>
    <StyledX src={ close } onClick={ () => toggleModal(false) }/>
    <StyledPrevArrow
      src={ arrow }
      onClick={ () => changePhoto('prev') } direction='prev'/>
    <StyledImage src={ currentPhoto } alt=""/>
    <StyledPrevNext
      src={ arrow }
      onClick={ () => changePhoto('next') }
      direction='next'/>
  </StyledWrapper>
);




export default PhotoModal;
