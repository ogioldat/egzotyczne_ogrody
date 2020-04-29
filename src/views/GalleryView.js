import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { bindActionCreators } from 'redux';
import fetchPhotosAction from 'redux/actions/gallery/fetchPhotos';
import {
  changePhoto as changePhotoAction,
  toggleModal as toggleModalAction,
  setCurrentPhoto as setCurrentPhotoAction,
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
import { getIsBigScreen, getIsTabletOrMobile } from '../redux/reducers/mediaReducer';

const StyledWrapper = styled(motion.div)`
  position: relative;
  padding: ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile ? theme.mobilePadding : '2% 0' };
  background-color: ${ ({ theme }) => theme.greyLight };
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  ${ ({ isModalVisible }) => isModalVisible && css`filter: brightness(10%)` }
`;

const StyledFlex = styled.div`
  display: flex;
  margin: auto;
  position: absolute;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '100%' };
  flex-direction: column;
  background-color: ${ ({ theme }) => theme.greyLight };
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled(motion.div)`
  cursor: zoom-in;
`;

const LinkWrapper = styled.div`
  position: absolute;
  left: ${({isTabletOrMobile}) => isTabletOrMobile ? '5vw' : 0};
  bottom: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '0' };
`;

const StyledOverflowWrapper = styled.div`
  height: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '60vh' };
  overflow-y: ${ ({ isTabletOrMobile }) => isTabletOrMobile && 'scroll' };
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
    setCurrentPhoto,
    isBigScreen,
  },
) => {
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <StyledFlex isTabletOrMobile={ isTabletOrMobile }>
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
            </>
          )
        }

        {
          error && <div>Nie udało się pobrać zdjęć 😭</div>
        }

        <StyledOverflowWrapper isTabletOrMobile={ isTabletOrMobile }>
          {
            pending ?
              <ClipLoader loading={ pending }/>
              :
              <MasonryLayout id="masonry-layout" sizes={ [
                {
                  columns: isTabletOrMobile ? 2 : 3,
                  gutter: isTabletOrMobile ? 6 : isBigScreen ? 10 : 20,
                }] }>
                {
                  photos.map((photo, index) => {
                    let height;

                    if (isTabletOrMobile) {
                      height = index % 2 === 0 ? '30vh' : '35vh';
                    } else if (isBigScreen) {
                      height = index % 2 === 0 ? '500px' : '600px';
                    } else {
                      height = index % 2 === 0 ? '400px' : '500px';
                    }
                    return (
                      <ImageWrapper
                        onClick={ () => {
                          setCurrentPhoto(index);
                          toggleModal(true);
                        } }>
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
        </StyledOverflowWrapper>
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
  isBigScreen: getIsBigScreen(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPhotos: fetchPhotosAction,
  changePhoto: changePhotoAction,
  toggleModal: toggleModalAction,
  setCurrentPhoto: setCurrentPhotoAction,
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
  currentPhoto: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryView);