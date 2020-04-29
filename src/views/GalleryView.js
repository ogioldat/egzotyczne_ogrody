import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { bindActionCreators } from 'redux';
import fetchPhotosAction from 'redux/actions/gallery/fetchPhotos';
import {
  changePhoto as changePhotoAction,
  toggleModal as toggleModalAction,
} from 'redux/actions/gallery/galleryActions';
import {
  getCurrentPhoto,
  getPhotos,
  getPhotosError,
  getPhotosPending,
  getShowModal,
} from 'redux/reducers/galleryReducer';
import styled, { css } from 'styled-components';
import GalleryImage from 'components/atoms/GalleryImage/GalleryImage';
import MasonryLayout from 'react-masonry-layout';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import ClipLoader from 'react-spinners/ClipLoader';
import { motion } from 'framer-motion';
import { wrapperMotion } from 'assets/motion';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import PhotoModal from '../components/organisms/PhotoModal/PhotoModal';
import { getIsTabletOrMobile } from '../redux/reducers/mediaReducer';

const StyledWrapper = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  padding: ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile ? theme.mobilePadding : '2% 0' };
  
  display: flex;
  flex-direction: column;
  align-items: center;
  ${ ({ isModalVisible }) => isModalVisible && css`filter: brightness(10%)` }
`;


const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ ({ theme }) => theme.greyLight };
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled(motion.div)`
  cursor: pointer;
`;

const StyledDarkBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 10;
  width: 100vw;
  background-color: rgba(0,0,0,0.9);
`;

const LinkWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '10vh' };
`;

const GalleryView = (
  {
    fetchPhotos,
    photos,
    pending,
    error,
    showModal,
    currentPhoto,
    changePhoto,
    toggleModal,
    isTabletOrMobile,
  },
) => {
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <StyledFlex>
      <StyledWrapper
        isTabletOrMobile={ isTabletOrMobile }
        initial="initial"
        animate="enter"
        exit="exit"
        variants={ wrapperMotion.variants }>
        <StyledTitleWrapper>
          <LinkWrapper isTabletOrMobile={ isTabletOrMobile }>
            <StyledLink to={ routes.home }>
              <Button secondary>strona główna</Button>
            </StyledLink>
          </LinkWrapper>
          <Heading type='subpage'>galeria zdjęć</Heading>
        </StyledTitleWrapper>
        {
          showModal && (
            <>
              <PhotoModal
                changePhoto={ changePhoto }
                toggleModal={ toggleModal }
                currentPhoto={ currentPhoto }/>
              <StyledDarkBox/>
            </>
          )
        }

        {
          error && <div>wystąpił błąd podczas pobierania zdjęć</div>
        }

        {
          pending ?
            <ClipLoader loading={ pending }/>
            :
            <MasonryLayout id="masonry-layout" sizes={ [{ columns: 3, gutter: isTabletOrMobile ? 6 : 20 }] }>
              {
                photos.map((photo, index) => {
                  let height;

                  if (isTabletOrMobile) {
                    height = index % 2 === 0 ? '20vh' : '25vh';
                  } else {
                    height = index % 2 === 0 ? '600px' : '700px';
                  }
                  return (
                    <ImageWrapper key={ uniqid() }>
                      <GalleryImage
                        isTabletOrMobile={ isTabletOrMobile }
                        index={ index }
                        height={ height }
                        image={ photo }/>
                    </ImageWrapper>
                  );
                })
              }
            </MasonryLayout>
        }
      </StyledWrapper>
    </StyledFlex>
  );
};

const mapStateToProps = state => ({
  photos: getPhotos(state),
  pending: getPhotosPending(state),
  error: getPhotosError(state),
  showModal: getShowModal(state),
  currentPhoto: getCurrentPhoto(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPhotos: fetchPhotosAction,
  changePhoto: changePhotoAction,
  toggleModal: toggleModalAction,
}, dispatch);

GalleryView.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string),
  pending: PropTypes.bool,
  error: PropTypes.bool,
  showModal: PropTypes.bool.isRequired,
  currentPhoto: PropTypes.string,
  changePhoto: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
};

GalleryView.defaultProps = {
  photos: [],
  pending: false,
  error: false,
  currentPhoto: null
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryView);