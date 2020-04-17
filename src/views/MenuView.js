import React from 'react';
import styled from 'styled-components';
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
import { content } from '../data/menuContent';


const StyledWrapper = styled(motion.div)`
  padding-top: 2%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${ ({ theme }) => theme.greyLight };
  z-index: 99;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  
  * {
    user-select: none;
  }
`;


const StyledMenuBlock = styled(motion.div)`
  margin: 15% auto;
`;


const StyledCXMenuSocials = styled(CXMenuSocials)`
  position: absolute;
  bottom: 0;
`;



const MenuView = () => (
  <>
    <StyledWrapper
      initial="initial"
      animate="enter"
      exit="exit"
      variants={ wrapperMotion.variants }>
      <StyledMenuBlock menu>
        <Heading type='menu'>rośliny</Heading>
        <PlantsList/>
      </StyledMenuBlock>

      <MenuBlock menu title='informacje' content={ content.info }/>
      <MenuBlock menu title='galeria' content={ content.gallery }/>

      <StyledCXMenuSocials/>
    </StyledWrapper>

  </>
);

const mapStateToProps = state => ({
  plants: getPlants(state),
});


export default connect(mapStateToProps)(MenuView);