import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { motion } from 'framer-motion';
import { imageMotion } from 'assets/motion';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getIsTabletOrMobile, getIsBigScreen } from 'redux/reducers/mediaReducer';
import {
  setCurrentPlant as setCurrentPlantAction,
  setCurrentPlantPhoto as setCurrentPlantPhotoAction,
  toggleModal as toggleModalAction,
} from 'redux/actions/plants/plantActions';

const StyledImageGrid = styled(motion.div)`
  ${ ({ isTabletOrMobile, isBigScreen }) => isTabletOrMobile ?
  css`
    display: flex;
    background-color: transparent;
    position: absolute;
    bottom: 15vh;
    width: 100%;
    overflow-x: scroll;
    border-radius: 12px;
`
  :
  isBigScreen ?
    css`
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-template-rows: repeat(-1, 200px);
    grid-gap: 20px;
`
    :
    css`
    display: flex;
    flex-direction: column;
    //display: grid;
    //grid-template-columns: repeat(1, 350px);
    //grid-template-rows: repeat(-1, 200px);
    //grid-gap: 20px;
    overflow-y: scroll;
    width: 100%;
    height: 70%;
    border-radius: 8px;
` };
 
  
  
  margin: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && '70px 140px auto 0' };
`;

const StyledImageBlock = styled.div`
  height: ${ ({ isTabletOrMobile, isBigScreen }) => isTabletOrMobile ? '30vh' : isBigScreen ? '200px' : '250px' };
  min-height: ${ ({ isTabletOrMobile, isBigScreen }) => isTabletOrMobile ? '30vh' : isBigScreen ? '200px' : '220px' };
  margin: ${ ({ isTabletOrMobile, isBigScreen }) => isTabletOrMobile ? '0 10px 0 0' : !isBigScreen && '0 0 20px 0' };
  
  min-width: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '50%' : '100%' };
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '20vw' };
  box-shadow: ${ ({ theme, isTabletOrMobile,isBigScreen }) => (!isTabletOrMobile && isBigScreen) && theme.shadow };
  cursor: zoom-in;
  border-radius: 8px;
  background: white url('${ ({ path }) => path }') center no-repeat;
  background-size: cover;
`;

const ImagesGrid = (
  {
    setCurrentPlantPhoto,
    toggleModal,
    isTabletOrMobile,
    name,
    images,
    title,
    isBigScreen,
  },
) => (
  <StyledImageGrid
    isBigScreen={ isBigScreen }
    isTabletOrMobile={ isTabletOrMobile }
    variants={ imageMotion.variants }
    transition={ imageMotion.transition }
    key={ name }>
    {
      images && images
        .map((image, index) => <StyledImageBlock
          key={ uniqid() }
          isBigScreen={ isBigScreen }
          isTabletOrMobile={ isTabletOrMobile }
          onClick={ () => {
            setCurrentPlantPhoto(index);
            toggleModal(true);
          } }
          path={ image }
          alt={ title + ' zdj' }/>)
    }
  </StyledImageGrid>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
  isBigScreen: getIsBigScreen(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setCurrentPlant: setCurrentPlantAction,
  toggleModal: toggleModalAction,
  setCurrentPlantPhoto: setCurrentPlantPhotoAction,
}, dispatch);

ImagesGrid.propTypes = {
  setCurrentPlantPhoto: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
  isBigScreen: PropTypes.bool.isRequired,
  name: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

ImagesGrid.defaultProps = {
  images: [],
  title: '',
  name: '',
};


export default connect(mapStateToProps, mapDispatchToProps)(ImagesGrid);