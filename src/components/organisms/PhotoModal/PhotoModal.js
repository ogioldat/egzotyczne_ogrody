import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import arrow from 'assets/icons/arrow_icon.png';
import ArrowControl from 'components/atoms/ArrowControl/ArrowControl';
import close from 'assets/icons/close.png';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';

const StyledWrapper = styled.div`
  position: fixed !important;
  z-index: 2000;
  background: rgba(0,0,0,0.7);
  margin: auto;
  padding: 3% 0;
  width: 100vw;
  height: 100vh;
  top: 0; 
  left: 0;  
  box-shadow: 0 10px 40px -10px #00000033;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  animation: animate-modal .7s ${ ({ theme }) => theme.bezier };
  transform-origin: center;
  
  @keyframes animate-modal{
    from {
      transform: scale(.8);
      opacity: 0;
    }
    to{
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const StyledImage = styled.img`
  ${ ({ isTabletOrMobile }) => isTabletOrMobile ?
  css`
    width: 80vw;
`
  : css`
    height: 90vh;
`
}
`;

const StyledX = styled.img`
  color: white;
  position: absolute;
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '6vw' : '32px' };
  top: 50px;
  padding: 5px;
  box-sizing: content-box;
  cursor:pointer;
  right: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '5%' : '50px' };
  transition: transform .5s ${ ({ theme }) => theme.bezier },
    opacity .5s ${ ({ theme }) => theme.bezier };
  
  &:hover {
    opacity: .6;
    transform: scale(.9);
  }
`;

const StyledPrevArrow = styled(ArrowControl)`
  position: absolute;
  left: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '1vw' : '50px' };
`;

const StyledNextArrow = styled(ArrowControl)`
  position: absolute;
  right: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '1vw' : '50px' };
`;


const PhotoModal = ({ currentPhoto, changePhoto, toggleModal, isTabletOrMobile }) => (
  <StyledWrapper>
    <StyledX
      isTabletOrMobile={ isTabletOrMobile }
      src={ close }
      onClick={ () => toggleModal(false) }/>
    <StyledPrevArrow
      isTabletOrMobile={ isTabletOrMobile }
      src={ arrow }
      onClick={ () => changePhoto('prev') } direction='prev'/>
    <StyledImage
      isTabletOrMobile={ isTabletOrMobile }
      src={ currentPhoto }
      alt=""/>
    <StyledNextArrow
      isTabletOrMobile={ isTabletOrMobile }
      src={ arrow }
      onClick={ () => changePhoto('next') }
      direction='next'/>
  </StyledWrapper>
);


const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(PhotoModal);
