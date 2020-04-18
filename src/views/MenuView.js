import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import CXMenuButton from 'components/atoms/CXMenuButton/CXMenuButton';
import CXMenuSocials from 'components/atoms/CXMenuSocials/CXMenuSocials';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { wrapperMotion, buttonMotion } from 'assets/motion';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { getPlants } from '../redux/reducers/plantsReducer';
import { routes } from '../routes';
import PlantsList from '../components/molecules/PlantsList/PlantsList';
import MenuBlock from '../components/molecules/MenuBlock/MenuBlock';
import { content } from '../assets/data/menuContent';
import { getIsTabletOrMobile } from '../redux/reducers/mediaReducer';


const StyledWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${ ({ theme }) => theme.greyLight };
  height: 100%;
  width: 100vw;
  z-index: 99;
`;

const StyledControlWrapper = styled.div`
  width: 100vw;
  height: 80vh;

  ${ ({ isTabletOrMobile }) => isTabletOrMobile ?
  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
` : css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
` };
  
  * {
    user-select: none;
  }
`;


const StyledCXMenuSocials = styled(CXMenuSocials)`
  //height: 10vh;
`;

const MenuView = ({ isTabletOrMobile }) => {


  return (
    <StyledWrapper
      initial="initial"
      animate="enter"
      exit="exit"
      variants={ wrapperMotion.variants }>
      <StyledControlWrapper isTabletOrMobile={ isTabletOrMobile }>
        <MenuBlock menu type='menu'>
          <Heading type='menu'>rośliny</Heading>
          <PlantsList menu/>
        </MenuBlock>

        <MenuBlock
          menu
          title='informacje'
          content={ content.info }/>
        <MenuBlock
          menu
          title='galeria'
          content={ content.gallery }/>

        <StyledCXMenuSocials isTabletOrMobile={ isTabletOrMobile }/>
      </StyledControlWrapper>

    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  plants: getPlants(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
});


export default connect(mapStateToProps)(MenuView);