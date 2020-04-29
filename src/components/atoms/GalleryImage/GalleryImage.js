import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setCurrentPhoto as setCurrentPhotoAction, toggleModal as toggleModalAction,
} from 'redux/actions/gallery/galleryActions';
import { getPhotos } from 'redux/reducers/galleryReducer';
import { getIsBigScreen } from '../../../redux/reducers/mediaReducer';

const StyledWrapper = styled.div`
 width: ${ ({ isTabletOrMobile, isBigScreen }) => isTabletOrMobile ? '28vw' : isBigScreen ? '400px' : '350px' };
 background: transparent url('${ ({ src }) => src }') no-repeat center;
 background-size: cover;
 height: ${ ({ height }) => height };
 line-height: ${ ({ height }) => height };
 display: block;
 z-index: 100;
`;

const GalleryImage = (
  {
    photos,
    height,
    index,
    isTabletOrMobile,
    isBigScreen,
  },
) => (
  <StyledWrapper
    isBigScreen={isBigScreen}
    isTabletOrMobile={ isTabletOrMobile }
    src={ photos[index] }
    height={ height }/>
);

const mapStateToProps = state => ({
  photos: getPhotos(state),
  isBigScreen: getIsBigScreen(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentPhoto: index => dispatch(setCurrentPhotoAction(index)),
  toggleModal: bool => dispatch(toggleModalAction(bool)),
});

GalleryImage.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  height: PropTypes.string.isRequired,
  index: PropTypes.number,
  isTabletOrMobile: PropTypes.bool.isRequired,
};
GalleryImage.defaultProps = {
  index: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryImage);
