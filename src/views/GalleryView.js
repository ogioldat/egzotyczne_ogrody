import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import { bindActionCreators } from 'redux';

import fetchPhotosAction from 'redux/actions/gallery/fetchPhotos';
import { getPhotos, getPhotosError, getPhotosPending, getShowModal } from 'redux/reducers/galleryReducer';

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
import GalleryModal from '../components/organisms/GalleryModal/GalleryModal';

const StyledWrapper = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  padding: 2% 0;
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
  position: absolute;
  left: 0;
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

class GalleryView extends React.Component {


  componentDidMount() {
    const { fetchPhotos } = this.props;
    fetchPhotos();
  }

  render() {
    const { photos, pending, error, showModal } = this.props;

    return (
      <StyledFlex>
        <StyledWrapper initial="initial"
                       animate="enter"
                       exit="exit"
                       variants={ wrapperMotion.variants }>
          <StyledTitleWrapper>
            <StyledLink to={ routes.home }>
              <Button secondary>strona główna</Button>
            </StyledLink>
            <Heading type='plantDetails'>galeria zdjęć</Heading>
          </StyledTitleWrapper>
          {
            showModal && (
              <>
                <GalleryModal/>
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
              <MasonryLayout id="masonry-layout" sizes={ [{ columns: 3, gutter: 30 }] }>
                {
                  photos.map((photo, index) => {
                    const height = index % 2 === 0 ? 600 : 700;

                    return (
                      <ImageWrapper>
                        <GalleryImage
                          key={ uniqid() }
                          index={index}
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
  }
}

const mapStateToProps = state => ({
  photos: getPhotos(state),
  pending: getPhotosPending(state),
  error: getPhotosError(state),
  showModal: getShowModal(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPhotos: fetchPhotosAction }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(GalleryView);