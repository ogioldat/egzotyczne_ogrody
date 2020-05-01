import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import CXMenuSocials from 'components/atoms/CXMenuSocials/CXMenuSocials';
import { motion } from 'framer-motion';
import { wrapperMotion } from 'assets/motion';
import { connect } from 'react-redux';
import { getPlants } from '../redux/reducers/plantsReducer';
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
` : css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
` };
  
  * {
    user-select: none;
  }
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

        <CXMenuSocials isTabletOrMobile={ isTabletOrMobile }/>
      </StyledControlWrapper>

    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  plants: getPlants(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
});


export default connect(mapStateToProps)(MenuView);