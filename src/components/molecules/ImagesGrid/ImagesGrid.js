import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { imageMotion } from 'assets/motion';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getIsTabletOrMobile } from 'redux/reducers/mediaReducer';
import {
  setCurrentPlant as setCurrentPlantAction,
  setCurrentPlantPhoto as setCurrentPlantPhotoAction,
  toggleModal as toggleModalAction,
} from 'redux/actions/plants/plantActions';

const StyledImageGrid = styled(motion.div)`
  ${ ({ isTabletOrMobile }) => isTabletOrMobile ?
  css`
    display: flex;
    background-color: transparent;
    position: absolute;
    bottom: 15vh;
    width: 100%;
    overflow-x: scroll;
    border-radius: 12px;
`
  : css`
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-template-rows: repeat(-1, 200px);
    grid-gap: 20px;
    //width: 35vw;
` };
  
  
  margin: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && '70px 140px auto 0' };
`;

const StyledImageBlock = styled.div`
  height: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '30vh' : '200px' };
  margin: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '0 10px 0 0'};
  min-width: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '50%' : '100%' };
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '20vw' };
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

ImagesGrid.propTypes = {
  setCurrentPlantPhoto: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ImagesGrid);