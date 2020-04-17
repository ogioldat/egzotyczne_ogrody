import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { toggleMenu as toggleMenuAction } from 'redux/actions/menuActions';
import { getShowMenu } from 'redux/reducers/menuReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { buttonMotion } from 'assets/motion';
import { motion } from 'framer-motion';


const StyledWrapper = styled.div`
  width: 35px;
  position: relative;
  margin-right: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && '15px' };
  display: flex;
  cursor: pointer;
  padding: 10px;
  z-index: 9999;
  
    &:hover {
      & > * {
       background-color: ${ ({ theme }) => theme.greyDark };
      }
  }
`;

const StyledRect = styled.div`
  width: 100%;
  background-color: ${ ({ theme, isTabletOrMobile }) => isTabletOrMobile ? theme.greyDark : theme.inactive };
  left: 0;
  display: block;
  border-radius: .3rem;
  position: absolute;
  height: 4px;
  transition: .5s ${({theme}) => theme.bezier};
  
  &:nth-child(1){
      top: 0;
    ${ ({ isActive }) => (
  isActive && css`
            top: 18px;
            width: 0;
            left: 50%;
    `) }
  }
  &:nth-child(3) {top: 10px;}
  
  &:nth-child(2) {
    top: 10px;
    ${ ({ isActive }) => (
  isActive && css`
          transform: rotate(45deg);
    `) }
  }
  &:nth-child(3) {
    ${ ({ isActive }) => (
  isActive && css`
          transform: rotate(-45deg);
    `) }
  }
  &:nth-child(4){
      top: 20px;
    ${ ({ isActive }) => (
  isActive && css`
          width: 0;
          left: 50%;
    `) }
    
  } 
`;

const Hamburger = ({ showMenu, toggleMenu, isTabletOrMobile }) => {

  return (
    <StyledWrapper
      isTabletOrMobile={ isTabletOrMobile }
      isActive={ showMenu }
      onClick={ () => toggleMenu() }>
      <StyledRect isActive={ showMenu } isTabletOrMobile={ isTabletOrMobile }/>
      <StyledRect isActive={ showMenu } isTabletOrMobile={ isTabletOrMobile }/>
      <StyledRect isActive={ showMenu } isTabletOrMobile={ isTabletOrMobile }/>
      <StyledRect isActive={ showMenu } isTabletOrMobile={ isTabletOrMobile }/>
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  showMenu: getShowMenu(state),
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenuAction()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);