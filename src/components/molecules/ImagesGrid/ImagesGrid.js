import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { imageMotion } from 'assets/motion';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';
import { bindActionCreators } from 'redux';
import {
  setCurrentPlant as setCurrentPlantAction,
  setCurrentPlantPhoto as setCurrentPlantPhotoAction,
  toggleModal as toggleModalAction,
} from '../../../redux/actions/plants/plantActions';
import { connect } from 'react-redux';

const StyledImageGrid = styled(motion.div)`
  ${ ({ isTabletOrMobile }) => isTabletOrMobile ?
  css`
    display: flex;
    width: 100%;
    //height: 100%;
    overflow-x: scroll;
`
  : css`
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-template-rows: repeat(-1, 200px);
    width: 35vw;
` };
  
  
  margin: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && '70px 140px auto 0' };
`;

const StyledImageBlock = styled.div`
  height: 200px;
  margin: 10px;
  min-width: 100%;
  box-shadow: ${ ({ theme, isTabletOrMobile }) => !isTabletOrMobile && theme.shadow };
  cursor: pointer;
  border-radius: 8px;
  background: white url('${ ({ path }) => path }') center no-repeat;
  background-size: cover;
`;

const ImagesGrid = ({ setCurrentPlantPhoto, toggleModal, isTabletOrMobile, name, images, title }) => (
  <StyledImageGrid
    isTabletOrMobile={ isTabletOrMobile }
    variants={ imageMotion.variants }
    transition={ imageMotion.transition }
    key={ name }>
    {
      images && images
        .map((image, index) => <StyledImageBlock
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setCurrentPlant: setCurrentPlantAction,
  toggleModal: toggleModalAction,
  setCurrentPlantPhoto: setCurrentPlantPhotoAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImagesGrid);