import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setCurrentPhoto as setCurrentPhotoAction, toggleModal as toggleModalAction
} from 'redux/actions/gallery/galleryActions';
import { motion } from 'framer-motion';
import { wrapperMotion, imageMotion } from 'assets/motion';
import { getPhotos } from 'redux/reducers/galleryReducer';

const StyledWrapper = styled.div`
 width: 500px;
 background: transparent url('${ ({ src }) => src }') no-repeat center;
 background-size: cover;
 height: ${ ({ height }) => height }px;
 line-height: ${ ({ height }) => height }px;
 display: block;
 z-index: 100;
`;

const GalleryImage = ({ photos, height, setCurrentPhoto, index, toggleModal }) => (
  <StyledWrapper
    src={ photos[index] }
    height={ height }
    onClick={ () => {
      setCurrentPhoto(index);
      toggleModal(true)
    } }/>
);

const mapStateToProps = state => ({
  photos: getPhotos(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentPhoto: index => dispatch(setCurrentPhotoAction(index)),
  toggleModal: bool => dispatch(toggleModalAction(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryImage);
