import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setCurrentPhoto as setCurrentPhotoAction, toggleModal as toggleModalAction,
} from 'redux/actions/gallery/galleryActions';
import { getPhotos } from 'redux/reducers/galleryReducer';

const StyledWrapper = styled.div`
 width: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '25vw' : '500px' };
 background: transparent url('${ ({ src }) => src }') no-repeat center;
 background-size: cover;
 height: ${ ({ height }) => height };
 line-height: ${ ({ height }) => height };
 display: block;
 z-index: 100;
`;

const GalleryImage = ({ photos, height, setCurrentPhoto, index, toggleModal, isTabletOrMobile }) => (
  <StyledWrapper
    isTabletOrMobile={ isTabletOrMobile }
    src={ photos[index] }
    height={ height }
    onClick={ () => {
      setCurrentPhoto(index);
      toggleModal(true);
    } }/>
);

const mapStateToProps = state => ({
  photos: getPhotos(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentPhoto: index => dispatch(setCurrentPhotoAction(index)),
  toggleModal: bool => dispatch(toggleModalAction(bool)),
});

GalleryImage.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  height: PropTypes.string.isRequired,
  setCurrentPhoto: PropTypes.func.isRequired,
  index: PropTypes.number,
  toggleModal: PropTypes.func.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
};
GalleryImage.defaultProps = {
  index: 0
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryImage);
